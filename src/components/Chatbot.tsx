"use client"

import React, { useState, useRef, useEffect } from "react"
import "./Chatbot.css"

// Knowledge base about Rohan Bandari
const knowledgeBase = {
  personal: {
    name: "Rohan Bandari",
    title: "Full Stack Developer",
    email: "rohan@example.com",
    phone: "+1 (234) 567-890",
    location: "Available Worldwide",
    background: "I'm a passionate UI/UX Designer and Webflow Developer with a keen eye for creating exceptional digital experiences that bridge the gap between beautiful design and functional technology.",
    approach: "My approach combines creative thinking with technical expertise to deliver results that exceed expectations.",
    personality: "Hey, I'm just a guy who loves turning caffeine into code and making things work. When I'm not staring at my screen debugging, I'm probably thinking about that one bug that's been haunting me for days.",
    quirks: "I have this weird relationship with CSS where I love it but also want to throw my laptop sometimes. And honestly, I think every bug is just a feature that hasn't been properly documented yet.",
    workStyle: "I code like I cook - throw in some ingredients, taste it, adjust, and hope it doesn't explode. Sometimes it's a masterpiece, sometimes it's a learning experience (that's what I tell myself anyway).",
    humor: "I make dad jokes about coding, laugh at my own debugging fails, and believe that if you can't laugh at your code, you're taking life too seriously.",
    dailyLife: "My typical day: wake up, coffee, code, more coffee, debug, lunch, code, coffee, debug, dinner, maybe more coding, definitely more coffee."
  },
  expertise: {
    primary: ["UI/UX Design", "Webflow Development", "Brand Identity", "Prototyping"],
    description: {
      "UI/UX Design": "Creating intuitive and engaging user interfaces that provide exceptional user experiences.",
      "Webflow Development": "Building responsive, fast-loading websites using modern web technologies and best practices.",
      "Brand Identity": "Developing cohesive visual identities that communicate brand values effectively.",
      "Prototyping": "Creating interactive prototypes to validate ideas and improve user experience."
    },
    specialties: {
      "Problem Solving": "I can debug faster than you can say 'it works on my machine' - though sometimes I wish I couldn't",
      "Creative Solutions": "Turning 'impossible' into 'I made it possible' since forever. My secret? I don't know it's impossible until I've already done it",
      "User-Centric Design": "I design for humans, not robots (except when I'm building this chatbot - that's a whole other story)",
      "Performance Optimization": "Making websites faster than a caffeinated developer on deadline. Because nobody likes waiting for a slow website, especially not me"
    }
  },
  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind", "shadcn", "Material UI", "Chakra UI"],
    backend: ["Node.js", "Express", "Hono", "C", "C++", "Python"],
    database: ["MongoDB", "PostgreSQL", "MySQL"],
    tools: ["Git", "GitHub", "Docker", "REST API", "Vercel", "Netlify"],
    favorites: {
      "Frontend": "React & TypeScript (because life's too short for vanilla JS, and I like my code to actually work)",
      "Styling": "Tailwind CSS (utility-first, because I'm lazy in the best way possible)",
      "Backend": "Node.js (JavaScript everywhere, because consistency is key and I can't remember multiple syntaxes)",
      "Database": "MongoDB (flexible like my coding schedule - sometimes structured, sometimes not)",
      "Deployment": "Vercel (deploy faster than you can say 'production ready' - which is good because I'm always pushing last minute)"
    },
    experience: {
      "Years": "Enough to know that 'it works on my machine' is never the right answer",
      "Projects": "From 'Hello World' to 'Hello, I built this entire system'",
      "Learning": "Always learning, because the tech world moves faster than my coffee consumption"
    }
  },
  projects: [
    {
      title: "Finance Management System",
      description: "A comprehensive financial management solution with expense tracking, budget planning, and financial reporting features. Because adulting is hard, but managing money shouldn't be!",
      category: "Full Stack",
      status: "live",
      technologies: ["Tailwind CSS", "React", "TypeScript", "MySQL"],
      liveUrl: "https://finance-management-demo.vercel.app",
      githubUrl: "https://github.com/username/finance-management",
      funFact: "This project taught me that users will find ways to break things that I never thought were breakable"
    },
    {
      title: "Pet Adoption and Rescue System",
      description: "A web-based Pet Adoption and Rescue System to connect shelters with potential adopters, featuring pet listings, adoption forms, and real-time updates. Making the world a better place, one paw at a time! 🐾",
      category: "Full Stack",
      status: "live",
      technologies: ["React.js", "Node.js", "TypeScript", "Tailwind CSS", "MySQL"],
      liveUrl: "https://pet-adoption-demo.vercel.app",
      githubUrl: "https://github.com/username/pet-adoption",
      funFact: "This project made me realize that even the cutest pet photos can't fix a broken API"
    },
    {
      title: "RFID based Payment System",
      description: "An RFID-based Payment System enabling contactless transactions using RFID tags, with secure authentication, real-time balance updates, and usage tracking.",
      category: "Full Stack",
      status: "live",
      technologies: ["React", "Chart.js", "Tailwind CSS", "API Integration", "Responsive"],
      liveUrl: "https://rfid-payment-demo.vercel.app",
      githubUrl: "https://github.com/username/rfid-payment"
    },
    {
      title: "Expense Tracker",
      description: "A web-based Expense Tracker application for managing personal finances, tracking expenses, and visualizing spending patterns with interactive charts.",
      category: "Web App",
      status: "live",
      technologies: ["React", "Chart.js", "Tailwind CSS", "API Integration", "Responsive"],
      liveUrl: "https://expense-tracker-demo.vercel.app",
      githubUrl: "https://github.com/username/expense-tracker"
    },
    {
      title: "Task Scheduler",
      description: "A web-based Task Scheduler for organizing daily activities, setting deadlines, and tracking progress with notifications and a clean, responsive UI.",
      category: "Web App",
      status: "live",
      technologies: ["HTML", "CSS", "JavaScript", "SQLite", "Spark API", "Java"],
      liveUrl: "https://task-scheduler-demo.vercel.app",
      githubUrl: "https://github.com/username/task-scheduler"
    },
    {
      title: "AI Recipe Generator",
      description: "A web-based AI Recipe Generator that suggests personalized recipes using user inputs and available ingredients, with step-by-step instructions and nutrition insights. Because sometimes you need AI to tell you what to cook! 🤖👨‍🍳",
      category: "AI/ML",
      status: "live",
      technologies: ["React", "MongoDB", "Next Auth", "Tailwind CSS", "TypeScript", "OpenAI API"],
      liveUrl: "https://ai-recipe-demo.vercel.app",
      githubUrl: "https://github.com/username/ai-recipe-generator",
      funFact: "This AI once suggested I make a 'coffee smoothie' - I'm still not sure if it was brilliant or terrifying"
    },
    {
      title: "Faculty Publication Management System",
      description: "A comprehensive web-based system for managing faculty publications, research papers, and academic achievements with automated citation tracking and reporting features.",
      category: "Full Stack",
      status: "in-development",
      technologies: ["JSP", "Java", "MySQL", "Servlet", "HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/username/faculty-publication-system"
    }
  ],
  social: {
    linkedin: "#",
    dribbble: "#",
    behance: "#",
    twitter: "#"
  }
}

// Chatbot responses based on user queries
const getChatbotResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase()
  
  // Personal information
  if (lowerMessage.includes("name") || lowerMessage.includes("who are you")) {
    return `Hey! I'm ${knowledgeBase.personal.name}, a ${knowledgeBase.personal.title}. Basically, I'm that guy who turns coffee into code and somehow makes it work! 😄\n\n${knowledgeBase.personal.personality}\n\n${knowledgeBase.personal.quirks}`
  }
  
  if (lowerMessage.includes("full name") || lowerMessage.includes("complete name")) {
    return `Oh yeah, I'm ${knowledgeBase.personal.name} - Rohan Bandari! 😄\n\nI'm a ${knowledgeBase.personal.title} who's obsessed with making things work. ${knowledgeBase.personal.personality}\n\nFun fact: My name means 'ascending' in Sanskrit, which is pretty fitting since I'm always trying to level up my coding game! 🚀`
  }
  
  if (lowerMessage.includes("contact") || lowerMessage.includes("email") || lowerMessage.includes("phone")) {
    return `Sure thing! Here's how to get in touch:\n\n📧 Email: ${knowledgeBase.personal.email}\n📱 Phone: ${knowledgeBase.personal.phone}\n🌍 Location: ${knowledgeBase.personal.location}\n\nI'll probably respond faster than my code compiles (which isn't saying much, but hey, I try! 😅)`
  }
  
  if (lowerMessage.includes("where") || lowerMessage.includes("location") || lowerMessage.includes("stay") || lowerMessage.includes("live") || lowerMessage.includes("hyderabad")) {
    return `Oh, I'm ${knowledgeBase.personal.location}! 🌍\n\nI work remotely, so I can collaborate with anyone anywhere (as long as there's decent internet and coffee - those are my non-negotiables! ☕)\n\nWhether you're in Hyderabad, New York, or somewhere in between, I'm just a message away. Time zones are just a social construct anyway, right? 😄`
  }
  
  if (lowerMessage.includes("internship") || lowerMessage.includes("job") || lowerMessage.includes("hire") || lowerMessage.includes("work") || lowerMessage.includes("opportunity") || lowerMessage.includes("looking for")) {
    return `Oh absolutely! I'm always down for exciting opportunities! 🚀\n\nI'm actively looking for:\n• Full-time gigs\n• Freelance projects\n• Internships\n• Cool collaborations\n\n${knowledgeBase.personal.workStyle}\n\nI love working on challenging stuff and learning new tech. Whether it's a startup, big company, or just a really cool project, I'm game!\n\nLet's build something awesome together! Hit me up at ${knowledgeBase.personal.email}`
  }
  
  if (lowerMessage.includes("personality") || lowerMessage.includes("what are you like")) {
    return `Oh man, that's a loaded question! 😄\n\n${knowledgeBase.personal.personality}\n\n${knowledgeBase.personal.quirks}\n\n${knowledgeBase.personal.workStyle}\n\n${knowledgeBase.personal.humor}\n\nBasically, I'm that developer who brings snacks to debugging sessions and laughs at my own code jokes! 🍕`
  }
  
  // Skills and expertise
  if (lowerMessage.includes("skill") || lowerMessage.includes("technology") || lowerMessage.includes("tech stack")) {
    return `Oh yeah, my tech stack! Here's what I work with:\n\n🖥️ Frontend: ${knowledgeBase.skills.frontend.join(", ")}\n⚙️ Backend: ${knowledgeBase.skills.backend.join(", ")}\n🗄️ Database: ${knowledgeBase.skills.database.join(", ")}\n🛠️ Tools: ${knowledgeBase.skills.tools.join(", ")}\n\nMy favorites:\n${knowledgeBase.skills.favorites["Frontend"]}\n${knowledgeBase.skills.favorites["Styling"]}\n${knowledgeBase.skills.favorites["Backend"]}\n\nI'm always learning new stuff though - the tech world moves faster than my coffee consumption! ☕`
  }
  
  if (lowerMessage.includes("expertise") || lowerMessage.includes("specialize") || lowerMessage.includes("what do you do")) {
    return `Oh, my expertise? Let me think... 😄\n\n${knowledgeBase.expertise.primary.map(exp => `• ${exp}: ${knowledgeBase.expertise.description[exp as keyof typeof knowledgeBase.expertise.description]}`).join("\n")}\n\nAnd some other stuff I'm pretty good at:\n${Object.entries(knowledgeBase.expertise.specialties).map(([skill, desc]) => `• ${skill}: ${desc}`).join("\n")}\n\nBasically, I'm a jack of all trades, master of some! 😅`
  }
  
  if (lowerMessage.includes("favorite") || lowerMessage.includes("prefer")) {
    return `Oh man, my tech crushes! 😄\n\n${Object.entries(knowledgeBase.skills.favorites).map(([category, reason]) => `💖 ${category}: ${reason}`).join("\n")}\n\nBut honestly, I'm always learning new stuff. The tech world moves faster than my coffee consumption, and that's saying something! ☕`
  }
  
  // Projects
  if (lowerMessage.includes("project") || lowerMessage.includes("work") || lowerMessage.includes("portfolio")) {
    const liveProjects = knowledgeBase.projects.filter(p => p.status === "live")
    const inDevProjects = knowledgeBase.projects.filter(p => p.status === "in-development")
    
    return `Oh yeah, my projects! Here's what I've been working on:\n\n🚀 ${liveProjects.length} Live & Kicking:\n${liveProjects.map(p => `• ${p.title} - ${p.description}`).join("\n")}\n\n🔧 ${inDevProjects.length} Still in the Lab:\n${inDevProjects.map(p => `• ${p.title} - ${p.description}`).join("\n")}\n\n${knowledgeBase.skills.experience["Projects"]} - from simple stuff to complex systems!`
  }
  
  if (lowerMessage.includes("finance") || lowerMessage.includes("money")) {
    const project = knowledgeBase.projects.find(p => p.title.toLowerCase().includes("finance"))
    return `Oh yeah, my Finance Management System! 💰\n\n${project?.description}\n\nBuilt with: ${project?.technologies.join(", ")}\nLive at: ${project?.liveUrl}\n\n${project?.funFact} 😅\n\nBecause let's be honest, adulting is hard enough without having to manually track every penny!`
  }
  
  if (lowerMessage.includes("pet") || lowerMessage.includes("adoption")) {
    const project = knowledgeBase.projects.find(p => p.title.toLowerCase().includes("pet"))
    return `Oh, my Pet Adoption System! 🐾\n\n${project?.description}\n\nBuilt with: ${project?.technologies.join(", ")}\nLive at: ${project?.liveUrl}\n\n${project?.funFact} 🐕\n\nThis one's close to my heart - helping pets find their forever homes!`
  }
  
  if (lowerMessage.includes("ai") || lowerMessage.includes("recipe")) {
    const project = knowledgeBase.projects.find(p => p.title.toLowerCase().includes("ai"))
    return `Oh, my AI Recipe Generator! 🤖👨‍🍳\n\n${project?.description}\n\nBuilt with: ${project?.technologies.join(", ")}\nLive at: ${project?.liveUrl}\n\n${project?.funFact} 👨‍🍳\n\nSometimes you just need AI to tell you what to cook when you're staring at your fridge like it's a foreign object! 😄`
  }
  
  if (lowerMessage.includes("rfid") || lowerMessage.includes("payment")) {
    const project = knowledgeBase.projects.find(p => p.title.toLowerCase().includes("rfid"))
    return `💳 My RFID Payment System - making payments as easy as waving a magic wand!\n\n${project?.description}\n\nBuilt with: ${project?.technologies.join(", ")}\nLive at: ${project?.liveUrl}\n\nBecause who has time for cash anymore? 💸`
  }
  
  if (lowerMessage.includes("expense") || lowerMessage.includes("tracker")) {
    const project = knowledgeBase.projects.find(p => p.title.toLowerCase().includes("expense"))
    return `📊 My Expense Tracker - because my wallet and I need to have a serious talk!\n\n${project?.description}\n\nBuilt with: ${project?.technologies.join(", ")}\nLive at: ${project?.liveUrl}\n\nNow I can't ignore my coffee addiction anymore! ☕`
  }
  
  // Experience and background
  if (lowerMessage.includes("experience") || lowerMessage.includes("background") || lowerMessage.includes("years")) {
    return `${knowledgeBase.personal.background}\n\n${knowledgeBase.personal.approach}\n\n${knowledgeBase.skills.experience["Years"]}\n${knowledgeBase.skills.experience["Learning"]}\n\nI've been coding long enough to know that 'it works on my machine' is never the right answer! 😂`
  }
  
  // Collaboration and work
  if (lowerMessage.includes("hire") || lowerMessage.includes("work together") || lowerMessage.includes("collaborate")) {
    return `🚀 Ready to create something amazing together?\n\nI'm always excited to work on new projects and collaborate with forward-thinking individuals and companies. Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you!\n\n${knowledgeBase.personal.workStyle}\n\nLet's turn your ideas into reality! Contact me at ${knowledgeBase.personal.email}`
  }
  
  if (lowerMessage.includes("social") || lowerMessage.includes("linkedin") || lowerMessage.includes("dribbble")) {
    return `Let's connect! I'm social (when I'm not debugging):\n\n• LinkedIn: ${knowledgeBase.social.linkedin}\n• Dribbble: ${knowledgeBase.social.dribbble}\n• Behance: ${knowledgeBase.social.behance}\n• Twitter: ${knowledgeBase.social.twitter}\n\nI promise my social media is more active than my GitHub on weekends! 😄`
  }
  
  if (lowerMessage.includes("coffee") || lowerMessage.includes("caffeine")) {
    return `Oh man, coffee! ☕\n\n${knowledgeBase.personal.dailyLife}\n\nI'm pretty sure my code runs on 90% caffeine and 10% hope. ${knowledgeBase.personal.personality}\n\nPro tip: Never trust a developer who doesn't drink coffee - they're probably robots or aliens! 🤖👽\n\nMy relationship with coffee is stronger than my relationship with CSS! 😄`
  }
  
  if (lowerMessage.includes("bug") || lowerMessage.includes("debug")) {
    return `Oh man, debugging! 🐛\n\n${knowledgeBase.personal.quirks}\n\nI can debug faster than you can say 'it works on my machine' - though sometimes I wish I couldn't! 😅\n\nRemember: Every bug is just a feature that hasn't been properly documented yet. That's what I tell myself anyway! 😄\n\nDebugging is like being a detective, except the criminal is your own code and the victim is your sanity! 🕵️‍♂️`
  }
  
  if (lowerMessage.includes("css") || lowerMessage.includes("styling")) {
    return `Oh CSS, my old friend! 🎨\n\n${knowledgeBase.personal.quirks}\n\n${knowledgeBase.skills.favorites["Styling"]}\n\nI once spent 3 hours centering a div. Was it worth it? Absolutely not, but I learned something! 😅\n\nCSS is like that friend who's amazing but also drives you crazy sometimes. We have a love-hate relationship, but mostly love (don't tell anyone I said that)! 😄`
  }
  
  // Default response
  return `Hey! I'm Rohan's AI assistant, and I know him pretty well! 🤖\n\nI can tell you about:\n• My full name and background\n• Where I'm located\n• My skills and tech stack\n• My projects (with some funny stories!)\n• My personality and quirks\n• Job/internship opportunities\n• How to get in touch\n• My coffee addiction ☕\n• My debugging adventures 🐛\n\nTry asking me:\n• "What's your full name?"\n• "Where do you stay?"\n• "Are you looking for an internship?"\n• "Tell me about your projects"\n• "What are your skills?"\n• "What's your personality like?"\n\nI'm programmed to be helpful and slightly witty (just like the real me)! 😄`
}

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Rohan's AI assistant. I know everything about him - his skills, projects, experience, and more. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = getChatbotResponse(inputValue)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button 
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chatbot"
      >
        <div className="notification-badge">AI</div>
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <div className="robot-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="10" rx="2" ry="2"></rect>
              <circle cx="12" cy="16" r="1"></circle>
              <path d="M8 11V7a4 4 0 0 1 8 0v4"></path>
              <path d="M7 11h10"></path>
              <path d="M9 11v4"></path>
              <path d="M15 11v4"></path>
            </svg>
            <div className="pulse-ring"></div>
          </div>
        )}
      </button>

      {/* Chatbot Interface */}
      <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
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
            <h3>Rohan's AI Assistant</h3>
            <span className="status">Online</span>
          </div>
          <button 
            className="close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Close chatbot"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`message ${message.isUser ? 'user' : 'bot'}`}
            >
              <div className="message-content">
                {message.text.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              <div className="message-time">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="message bot">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
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
              placeholder="Ask me anything about Rohan..."
              rows={1}
              disabled={isTyping}
            />
            <button 
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="send-btn"
              aria-label="Send message"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22,2 15,22 11,13 2,9"></polygon>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chatbot 