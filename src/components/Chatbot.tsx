"use client"

import React, { useState, useRef, useEffect } from "react"
import "./Chatbot.css"

// TypeScript declarations for Speech Recognition API
declare global {
  interface Window {
    SpeechRecognition: any
    webkitSpeechRecognition: any
  }
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean
  interimResults: boolean
  lang: string
  start(): void
  stop(): void
  onresult: (event: SpeechRecognitionEvent) => void
  onerror: (event: Event) => void
  onend: () => void
}

interface SpeechRecognitionEvent {
  results: SpeechRecognitionResultList
}

interface SpeechRecognitionResultList {
  [index: number]: SpeechRecognitionResult
  length: number
}

interface SpeechRecognitionResult {
  [index: number]: SpeechRecognitionAlternative
  length: number
  isFinal: boolean
}

interface SpeechRecognitionAlternative {
  transcript: string
  confidence: number
}

// Extended knowledge base
interface ExtendedKnowledgeBase {
  personal: Record<string, string>
  expertise: Record<string, string[] | Record<string, string>>
  skills: Record<string, any>
  projects: Record<string, any>
  social: Record<string, string>
  training: any[]
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean; timestamp: Date }>>([
    { text: "Hey there! I'm RBot, Rohan's AI assistant! Nice to meet you!\n\nI know everything about Rohan - his skills, projects, college life, and more!\n\nWhat would you like to know about him?", isUser: false, timestamp: new Date() }
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [isListening, setIsListening] = useState(false)
  const [isAwake, setIsAwake] = useState(false)
  const recognitionRef = useRef<SpeechRecognition | null>(null)
  const synthRef = useRef<SpeechSynthesis | null>(null)
  const wakeWordRecognitionRef = useRef<SpeechRecognition | null>(null)

  // Extended knowledge base with training capabilities
  const [knowledgeBase, setKnowledgeBase] = useState<ExtendedKnowledgeBase>({
    personal: {
      name: "Rohan Bandari",
      fullName: "Rohan Bandari",
      location: "Chennai",
      hometown: "Hyderabad",
      college: "SRM Institute of Science and Technology, KTR",
      year: "3rd year (5th semester)",
      course: "Computer Science and Engineering",
      specialization: "Internet of Things (IoT)",
      email: "rohanbandari0509@gmail.com",
      phone: "+91 98765 43210",
      food: "Biryani, Chicken 65",
      relationship: "Bro is so single that sometimes he flirts with me",
      internship: "Looking for internship opportunities",
      personality: "Passionate about coding and always eager to learn new technologies",
      quirks: "Sometimes spends hours debugging just to find a missing semicolon",
      workStyle: "Prefers working late nights with good music",
      humor: "Has a dry sense of humor, especially about his coding mistakes",
      dailyLife: "Balances college, coding projects, and trying to figure out why his code works on localhost but not on production"
    },
    expertise: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Material UI"],
      backend: ["Node.js", "Express", "Python", "C", "C++"],
      database: ["MongoDB", "PostgreSQL", "MySQL"],
      tools: ["Git", "GitHub", "Docker", "Vercel", "Netlify"],
      description: {
        "UI/UX Design": "Creates beautiful and intuitive user interfaces",
        "Webflow Development": "Builds responsive websites with modern frameworks",
        "Brand Identity": "Develops cohesive brand experiences",
        "Prototyping": "Rapid prototyping and iteration"
      } as Record<string, string>
    },
    skills: {
      languages: ["JavaScript", "TypeScript", "Python", "C", "C++", "HTML", "CSS"],
      frameworks: ["React", "Next.js", "Express", "Tailwind CSS", "Material UI"],
      databases: ["MongoDB", "PostgreSQL", "MySQL"],
      tools: ["Git", "GitHub", "Docker", "Vercel", "Netlify"],
      experience: {
        "Frontend Development": "Building responsive and interactive web applications",
        "Backend Development": "Creating robust server-side applications and APIs",
        "Database Design": "Designing and managing database schemas",
        "DevOps": "Deployment and CI/CD pipelines",
        "Leadership": "Leading teams and managing projects"
      },
      specialties: ["Full Stack Development", "UI/UX Design", "API Development"],
      favorites: ["React for frontend", "Node.js for backend", "MongoDB for databases"]
    },
    projects: {
      "AI Recipe Generator": {
        description: "An AI-powered recipe generator that creates personalized recipes based on available ingredients",
        tech: ["React", "Node.js", "OpenAI API", "MongoDB"],
        funFact: "Sometimes generates recipes that sound delicious but are impossible to make!"
      },
      "Expense Tracker": {
        description: "A comprehensive expense tracking application with budget management",
        tech: ["React", "Express", "PostgreSQL", "Chart.js"],
        funFact: "Helps track expenses but can't track where all the money goes!"
      },
      "Portfolio Website": {
        description: "A modern portfolio website with interactive elements and chatbot",
        tech: ["React", "TypeScript", "Tailwind CSS", "EmailJS"],
        funFact: "This very website you're looking at right now!"
      }
    },
    social: {
      linkedin: "https://www.linkedin.com/in/rohan-bandari-651787287/",
      github: "https://github.com/Rohan0595",
      email: "rohanbandari0509@gmail.com"
    },
    training: []
  })

  // Initialize Speech Recognition and Synthesis
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      const synth = window.speechSynthesis
      
      if (SpeechRecognition) {
        // Wake word recognition (continuous listening for "RBot" or "hey RBot")
        const wakeWordRecognition = new SpeechRecognition() as any
        wakeWordRecognition.continuous = true
        wakeWordRecognition.interimResults = true
        wakeWordRecognition.lang = 'en-US'
        
        wakeWordRecognition.onresult = (event: any) => {
          let transcript = ''
          for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript.toLowerCase()
          }
          
          // Check for wake words - handle various pronunciations
          const wakeWords = [
            'hey rbot',
            'hey r bot',
            'hey r-bot',
            'hey robot',
            'rbot',
            'r bot',
            'r-bot',
            'robot',
            'are bot',
            'hey are bot'
          ]
          
          const hasWakeWord = wakeWords.some(word => transcript.includes(word))
          
          if (hasWakeWord) {
            if (!isAwake && !isListening) {
              setIsAwake(true)
              setIsListening(true)
              wakeWordRecognition.stop()
              // Start command recognition
              if (recognitionRef.current) {
                setTimeout(() => {
                  recognitionRef.current?.start()
                }, 300)
              }
            }
          }
        }
        
        wakeWordRecognition.onerror = (event: any) => {
          // Restart wake word recognition if it stops
          if (event.error !== 'no-speech' && !isAwake) {
            setTimeout(() => {
              if (wakeWordRecognitionRef.current && !isAwake) {
                try {
                  wakeWordRecognitionRef.current.start()
                } catch (e) {
                  // Ignore errors
                }
              }
            }, 1000)
          }
        }
        
        wakeWordRecognition.onend = () => {
          // Restart wake word recognition if not awake
          if (!isAwake && !isListening) {
            setTimeout(() => {
              if (wakeWordRecognitionRef.current && !isAwake) {
                try {
                  wakeWordRecognitionRef.current.start()
                } catch (e) {
                  // Ignore errors
                }
              }
            }, 500)
          }
        }
        
        wakeWordRecognitionRef.current = wakeWordRecognition
        
        // Command recognition (for actual commands after wake word)
        const recognition = new SpeechRecognition() as any
        recognition.continuous = false
        recognition.interimResults = false
        recognition.lang = 'en-US'
        
        recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript
          setInputValue(transcript)
          setIsListening(false)
          setIsAwake(false)
          
          setTimeout(() => {
            const userMessage = transcript.trim()
            setMessages((prev: any) => [...prev, { text: userMessage, isUser: true, timestamp: new Date() }])
            setInputValue("")
            setIsTyping(true)
            
            setTimeout(() => {
              const botResponse = getChatbotResponse(userMessage)
              setMessages((prev: any) => [...prev, { text: botResponse, isUser: false, timestamp: new Date() }])
              setIsTyping(false)
              speakText(botResponse)
              
              // Restart wake word recognition after response
              setTimeout(() => {
                if (wakeWordRecognitionRef.current && !isAwake) {
                  try {
                    wakeWordRecognitionRef.current.start()
                  } catch (e) {
                    // Ignore errors
                  }
                }
              }, 1000)
            }, 1000)
          }, 100)
        }
        
        recognition.onerror = () => {
          setIsListening(false)
          setIsAwake(false)
          // Restart wake word recognition
          setTimeout(() => {
            if (wakeWordRecognitionRef.current && !isAwake) {
              try {
                wakeWordRecognitionRef.current.start()
              } catch (e) {
                // Ignore errors
              }
            }
          }, 1000)
        }
        
        recognition.onend = () => {
          setIsListening(false)
          setIsAwake(false)
          // Restart wake word recognition
          setTimeout(() => {
            if (wakeWordRecognitionRef.current && !isAwake) {
              try {
                wakeWordRecognitionRef.current.start()
              } catch (e) {
                // Ignore errors
              }
            }
          }, 500)
        }
        
        recognitionRef.current = recognition
        
        // Start wake word recognition
        setTimeout(() => {
          try {
            wakeWordRecognition.start()
          } catch (e) {
            // Ignore errors
          }
        }, 1000)
      }
      
      synthRef.current = synth
    }
    
    // Cleanup on unmount
    return () => {
      if (wakeWordRecognitionRef.current) {
        try {
          wakeWordRecognitionRef.current.stop()
        } catch (e) {
          // Ignore errors
        }
      }
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop()
        } catch (e) {
          // Ignore errors
        }
      }
    }
  }, [isAwake, isListening])

  // Start wake word recognition when chatbot opens
  useEffect(() => {
    if (isOpen && wakeWordRecognitionRef.current && !isAwake && !isListening) {
      setTimeout(() => {
        try {
          wakeWordRecognitionRef.current?.start()
        } catch (e) {
          // Ignore errors - might already be running
        }
      }, 500)
    }
  }, [isOpen, isAwake, isListening])

  // Speak bot responses
  const speakText = (text: string) => {
    if (synthRef.current) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.9
      utterance.pitch = 1
      utterance.volume = 0.8
      synthRef.current.speak(utterance)
    }
  }

  const startListening = () => {
    if (recognitionRef.current && !isListening && !isAwake) {
      setIsListening(true)
      setIsAwake(true)
      // Stop wake word recognition
      if (wakeWordRecognitionRef.current) {
        try {
          wakeWordRecognitionRef.current.stop()
        } catch (e) {
          // Ignore errors
        }
      }
      recognitionRef.current.start()
    }
  }

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop()
      setIsListening(false)
      setIsAwake(false)
      // Restart wake word recognition
      setTimeout(() => {
        if (wakeWordRecognitionRef.current && !isAwake) {
          try {
            wakeWordRecognitionRef.current.start()
          } catch (e) {
            // Ignore errors
          }
        }
      }, 500)
    }
  }

  const SPELLING_VARIATIONS: Record<string, string[]> = {
    'pursuing': ['persuing', 'pursing', 'pursueing', 'pursue'],
    'studying': ['studing', 'study', 'studies'],
    'skills': ['skill', 'skils', 'skilz', 'skulls'],
    'contact': ['contct', 'contat', 'email', 'phone'],
    'debug': ['debugging', 'debugg', 'bug', 'bugs'],
    'css': ['css', 'styling', 'style'],
    'hello': ['hi', 'hey', 'hii', 'hiii', 'hiiii', 'heyy', 'heyyy', 'sup', 'whatsup', 'whats up'],
    'hi': ['hello', 'hey', 'hii', 'hiii', 'hiiii', 'heyy', 'heyyy', 'sup', 'whatsup', 'whats up'],
    'hey': ['hello', 'hi', 'hii', 'hiii', 'hiiii', 'heyy', 'heyyy', 'sup', 'whatsup', 'whats up'],
    'good morning': ['gm', 'goodmorning', 'morning', 'gm'],
    'good afternoon': ['ga', 'goodafternoon', 'afternoon'],
    'good evening': ['ge', 'goodevening', 'evening'],
    'resume': ['cv', 'curriculum vitae', 'resume', 'resume'],
    'download': ['download', 'get', 'fetch', 'obtain']
  }

  const fuzzyMatch = (input: string, target: string): boolean => {
    const lowerInput = input.toLowerCase()
    const lowerTarget = target.toLowerCase()
    
    // Direct match
    if (lowerInput.includes(lowerTarget) || lowerTarget.includes(lowerInput)) {
      return true
    }
    
    // Check spelling variations
    const variations = SPELLING_VARIATIONS[target] || []
    return variations.some(variation => lowerInput.includes(variation.toLowerCase()))
  }

  const getChatbotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase()
    
    
    // Greetings
    if (fuzzyMatch(lowerMessage, "hello") || fuzzyMatch(lowerMessage, "hi") || fuzzyMatch(lowerMessage, "hey") || fuzzyMatch(lowerMessage, "good morning") || fuzzyMatch(lowerMessage, "good afternoon") || fuzzyMatch(lowerMessage, "good evening") || fuzzyMatch(lowerMessage, "gm") || fuzzyMatch(lowerMessage, "ga") || fuzzyMatch(lowerMessage, "ge")) {
      return `Hey there! I'm RBot, Rohan's AI assistant! Nice to meet you!\n\nI know everything about Rohan - his skills, projects, college life, and more!\n\nWhat would you like to know about him?`
    }
    
    // Name / Introduction
    if (lowerMessage.includes("name") || lowerMessage.includes("who") || lowerMessage.includes("full name") || 
        lowerMessage.includes("introduce") || lowerMessage.includes("about rohan") || lowerMessage.includes("tell me about")) {
      return `Rohan's full name is ${knowledgeBase.personal.fullName}! He's a passionate Full Stack Developer who loves creating amazing digital experiences. He's currently in his ${knowledgeBase.personal.year} of ${knowledgeBase.personal.course} with specialization in ${knowledgeBase.personal.specialization} at ${knowledgeBase.personal.college}. Originally from ${knowledgeBase.personal.hometown}, he now lives in ${knowledgeBase.personal.location}. He's skilled in various technologies and always eager to learn new things!`
    }
    
    // Location
    if (lowerMessage.includes("where") || lowerMessage.includes("location") || lowerMessage.includes("stay") || 
        lowerMessage.includes("live") || lowerMessage.includes("currently") || lowerMessage.includes("from")) {
      return `Rohan is from ${knowledgeBase.personal.hometown} but currently lives in ${knowledgeBase.personal.location}!`
    }
    
    // College / Institute
    if (lowerMessage.includes("college") || lowerMessage.includes("university") || lowerMessage.includes("institute") || 
        lowerMessage.includes("studies at") || lowerMessage.includes("goes to") || lowerMessage.includes("go to")) {
      return `Rohan studies at ${knowledgeBase.personal.college}. He's currently in his ${knowledgeBase.personal.year} of ${knowledgeBase.personal.course} with specialization in ${knowledgeBase.personal.specialization}.`
    }
    
    // Course/Pursuing
    if (lowerMessage.includes("pursuing") || lowerMessage.includes("pursue") || lowerMessage.includes("studying") || 
        lowerMessage.includes("course") || lowerMessage.includes("degree") || lowerMessage.includes("what is rohan") ||
        lowerMessage.includes("what does rohan")) {
      return `Rohan is pursuing ${knowledgeBase.personal.course} with specialization in ${knowledgeBase.personal.specialization}! Between coding, and trying to figure out why his luck is the worst, he's got his hands full!`
    }
    
    // Skills
    if (fuzzyMatch(lowerMessage, "skills") || lowerMessage.includes("technologies") || lowerMessage.includes("tech stack")) {
      return `Rohan is skilled in:\n\nFrontend: ${knowledgeBase.skills.frameworks.join(', ')}\nBackend: ${knowledgeBase.skills.languages.join(', ')}\nDatabases: ${knowledgeBase.skills.databases.join(', ')}\nTools: ${knowledgeBase.skills.tools.join(', ')}\n\nHe's always learning new technologies and loves experimenting with different tech stacks!`
    }
    
    // Projects
    if (lowerMessage.includes("projects") || lowerMessage.includes("work") || lowerMessage.includes("portfolio")) {
      let response = "Rohan has worked on several interesting projects:\n\n"
      Object.entries(knowledgeBase.projects).forEach(([name, project]) => {
        response += `• ${name}: ${project.description}\nTech: ${project.tech.join(', ')}\nFun fact: ${project.funFact}\n\n`
      })
      return response
    }
    
    // Contact
    if (fuzzyMatch(lowerMessage, "contact") || lowerMessage.includes("email") || lowerMessage.includes("phone") || lowerMessage.includes("reach")) {
      return `You can reach Rohan at:\nEmail: ${knowledgeBase.social.email}\nLinkedIn: ${knowledgeBase.social.linkedin}\nGitHub: ${knowledgeBase.social.github}`
    }
    
    // Favorite food
    if (lowerMessage.includes("food") || lowerMessage.includes("favorite") || lowerMessage.includes("eat")) {
      return `Rohan's favorite food is ${knowledgeBase.personal.food}!`
    }
    
    // Relationship status
    if (lowerMessage.includes("girlfriend") || lowerMessage.includes("single") || lowerMessage.includes("relationship")) {
      return knowledgeBase.personal.relationship
    }
    
    // Internship
    if (lowerMessage.includes("internship") || lowerMessage.includes("job") || lowerMessage.includes("opportunities")) {
      return `Yes, Rohan is actively looking for internship opportunities! He's passionate about learning and contributing to real-world projects.`
    }
    
    // Leadership
    if (lowerMessage.includes("leadership") || lowerMessage.includes("lead") || lowerMessage.includes("manage")) {
      return `Rohan has leadership experience in various roles including President of Founders Club and Events Lead at Dbug Labs. He enjoys leading teams and managing projects!`
    }
    
    // Try to provide a helpful response even if not exact match
    if (lowerMessage.includes("rohan")) {
      return `I know a lot about Rohan! Here's a quick overview:\n\n• Name: ${knowledgeBase.personal.fullName}\n• Location: From ${knowledgeBase.personal.hometown}, currently in ${knowledgeBase.personal.location}\n• Education: ${knowledgeBase.personal.year} of ${knowledgeBase.personal.course} at ${knowledgeBase.personal.college}\n• Specialization: ${knowledgeBase.personal.specialization}\n• Skills: Full Stack Development, React, Node.js, and more!\n\nYou can ask me about his skills, projects, contact info, or anything else about him!`
    }
    
    // Default response
    return `Hey, I don't really understand what you're asking. Kindly cross check or ask me in a way I understand. Thank you!\n\nPS: I'm not dumb, I don't know why Rohan calls me that!\n\nTry asking about:\n• Rohan's name or introduction\n• Where he studies or what he's pursuing\n• His skills or projects\n• How to contact him`
  }

  const handleSendMessage = (messageText?: string) => {
    const textToSend = messageText || inputValue.trim()
    if (!textToSend) return
    
    const userMessage = textToSend.trim()
    setMessages(prev => [...prev, { text: userMessage, isUser: true, timestamp: new Date() }])
    setInputValue("")
    setIsTyping(true)
    
    setTimeout(() => {
      const botResponse = getChatbotResponse(userMessage)
      setMessages(prev => [...prev, { text: botResponse, isUser: false, timestamp: new Date() }])
      setIsTyping(false)
      // Speak the bot response
      speakText(botResponse)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])


  return (
    <>
      <button
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chatbot"
      >
        <div className="notification-badge">Talk to RBot</div>
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <div className="robot-icon">
            <div className="pulse-ring"></div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" y1="19" x2="12" y2="23"></line>
              <line x1="8" y1="23" x2="16" y2="23"></line>
            </svg>
          </div>
        )}
      </button>

      {isOpen && (
        <div className="chatbot-container open">
          <div className="chatbot-header">
            <div className="chatbot-avatar">
              <div className="ai-avatar">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="23"></line>
                  <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
              </div>
            </div>
            <div className="chatbot-info">
              <h3>RBot 🤖</h3>
              <div className="status">Online • Ready to help</div>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.isUser ? 'user' : 'bot'}`}>
                <div className="message-content">
                  {message.text.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                <div className="message-time">
                  {message.timestamp.getHours().toString().padStart(2, '0')}:{message.timestamp.getMinutes().toString().padStart(2, '0')}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input">
            <div className="input-container">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                rows={1}
                disabled={isTyping || isListening}
              />
              <button 
                className={`voice-btn ${isListening || isAwake ? 'listening' : ''}`}
                onClick={isListening ? stopListening : startListening}
                disabled={isTyping}
                title={isListening ? "Stop listening" : isAwake ? "Waiting for command..." : "Start voice input or say 'RBot'"}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="23"></line>
                  <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
              </button>
              <button 
                className="send-btn" 
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim() || isTyping || isListening}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22,2 15,22 11,13 2,9"></polygon>
                </svg>
              </button>
            </div>
            {(isListening || isAwake) && (
              <div className="listening-indicator">
                <span>{isAwake && !isListening ? "👂 Say 'RBot' or 'Hey RBot' to activate..." : "🎤 Listening..."}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot 