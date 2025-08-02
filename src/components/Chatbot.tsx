"use client"

import React, { useState, useRef, useEffect } from "react"
import "./Chatbot.css"

// Knowledge base about Rohan Bandari
const knowledgeBase = {
  personal: {
    name: "Rohan Bandari",
    title: "Full Stack Developer",
    email: "rohanbandari0509@gmail.com",
    phone: "+91 7095040612",
    location: "Chennai, India",
    hometown: "Hyderabad, India",
    college: "SRM Institute of Science and Technology, KTR",
    year: "3rd year",
    course: "Computer Science and Engineering (CSE)",
    specialization: "Internet of Things (IoT)",
    background: "I'm a passionate UI/UX Designer and Webflow Developer with a keen eye for creating exceptional digital experiences that bridge the gap between beautiful design and functional technology.",
    approach: "My approach combines creative thinking with technical expertise to deliver results that exceed expectations.",
    personality: "Hey, I'm just a guy who loves turning caffeine into code and making things work. When I'm not staring at my screen debugging, I'm probably thinking about that one bug that's been haunting me for days.",
    quirks: "I have this weird relationship with CSS where I love it but also want to throw my laptop sometimes. And honestly, I think every bug is just a feature that hasn't been properly documented yet.",
    workStyle: "I code like I cook - throw in some ingredients, taste it, adjust, and hope it doesn't explode. Sometimes it's a masterpiece, sometimes it's a learning experience (that's what I tell myself anyway).",
    humor: "I make dad jokes about coding, laugh at my own debugging fails, and believe that if you can't laugh at your code, you're taking life too seriously.",
    dailyLife: "My typical day: wake up, code, debug, lunch, code, debug, dinner, maybe more coding.",
    food: "Biryani and Chicken 65 - basically the best food ever!",
    relationship: "Bro is so single that sometimes he flirts with me 😂",
    internship: "Yeah, I'm actively looking for internships! Always open to cool opportunities."
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
      "Years": "2+ years of hands-on development experience",
      "Projects": "Built 10+ full-stack applications from concept to deployment",
      "Learning": "Always learning, because the tech world moves faster than my code compilation",
      "Leadership": "President of Founders Club, Events Lead at Dbug Labs, and Volunteer at Student Placement Team",
      "Internships": "Looking for opportunities to grow and contribute to innovative projects",
      "Skills": "Full-stack development with focus on React, Node.js, and modern web technologies",
      "Resume": "Download my detailed resume for complete experience and skills overview"
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
      funFact: "This AI once suggested I make a 'code smoothie' - I'm still not sure if it was brilliant or terrifying"
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
    linkedin: "https://www.linkedin.com/in/rohan-bandari-651787287/",
    github: "https://github.com/Rohan0595",
    dribbble: "#",
    behance: "#",
    twitter: "#"
  }
}

// Common misspellings and variations
const SPELLING_VARIATIONS: Record<string, string[]> = {
  'pursuing': ['persuing', 'pursing', 'pursueing', 'pursue'],
  'studying': ['studing', 'study', 'studies'],
  'college': ['collage', 'collge', 'university', 'uni'],
  'university': ['univercity', 'univeristy', 'uni'],
  'internship': ['internsip', 'intern', 'internships'],
  'girlfriend': ['gf', 'girl friend', 'girlfreind', 'girlfrend'],
  'relationship': ['relation', 'relatonship', 'relashionship'],
  'biryani': ['biryani', 'biriyani', 'biryani', 'biryani'],
  'chicken': ['chiken', 'chicken', 'chicken65'],
  'hyderabad': ['hyderbad', 'hyderabd', 'hydrabad'],
  'chennai': ['chenai', 'chennai', 'madras'],
  'srm': ['srm', 'srm university', 'srmist'],
  'iot': ['iot', 'internet of things', 'internetofthings'],
  'cse': ['cse', 'computer science', 'computer science engineering'],
  'projects': ['project', 'projcts', 'projecs'],
      'skills': ['skill', 'skils', 'skilz', 'skulls'],
  'contact': ['contct', 'contat', 'email', 'phone'],
  
  'debug': ['debugging', 'debugg', 'bug', 'bugs'],
  'css': ['css', 'styling', 'style'],
  'food': ['fud', 'foods', 'eating', 'eat'],
  'name': ['nme', 'nam', 'full name'],
  'where': ['were', 'wher', 'location', 'live'],
  'from': ['frm', 'fro', 'hometown'],
      'favorite': ['favourite', 'fav', 'fave', 'prefer'],
    'hello': ['hi', 'hey', 'hii', 'hiii', 'hiiii', 'heyy', 'heyyy', 'sup', 'whatsup', 'whats up'],
    'hi': ['hello', 'hey', 'hii', 'hiii', 'hiiii', 'heyy', 'heyyy', 'sup', 'whatsup', 'whats up'],
    'hey': ['hello', 'hi', 'hii', 'hiii', 'hiiii', 'heyy', 'heyyy', 'sup', 'whatsup', 'whats up'],
    'good morning': ['gm', 'goodmorning', 'morning', 'gm'],
    'good afternoon': ['ga', 'goodafternoon', 'afternoon'],
    'good evening': ['ge', 'goodevening', 'evening'],
    'resume': ['cv', 'curriculum vitae', 'resume', 'resume'],
    'download': ['download', 'get', 'fetch', 'obtain']
}

// Fuzzy matching function to handle typos and spelling mistakes
const fuzzyMatch = (input: string, target: string): boolean => {
  const inputLower = input.toLowerCase()
  const targetLower = target.toLowerCase()
  
  // Direct match
  if (inputLower.includes(targetLower)) return true
  
  // Check if input matches any variation of the target
  if (SPELLING_VARIATIONS[targetLower]) {
    return SPELLING_VARIATIONS[targetLower].some(variation => inputLower.includes(variation))
  }
  
  // Check if target is a variation of any known word
  for (const [key, variations] of Object.entries(SPELLING_VARIATIONS)) {
    if (variations.includes(targetLower) && inputLower.includes(key)) {
      return true
    }
  }
  
  return false
}

// Chatbot responses based on user queries
const getChatbotResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase()
  
  // Greetings
  if (fuzzyMatch(lowerMessage, "hello") || fuzzyMatch(lowerMessage, "hi") || fuzzyMatch(lowerMessage, "hey") || fuzzyMatch(lowerMessage, "good morning") || fuzzyMatch(lowerMessage, "good afternoon") || fuzzyMatch(lowerMessage, "good evening") || fuzzyMatch(lowerMessage, "gm") || fuzzyMatch(lowerMessage, "ga") || fuzzyMatch(lowerMessage, "ge")) {
    return `Hey there! I'm RBot, Rohan's AI assistant! Nice to meet you!\n\nI know everything about Rohan - his skills, projects, college life, and more!\n\nWhat would you like to know about him?`
  }
  
  // Personal information
  if (fuzzyMatch(lowerMessage, "name") || fuzzyMatch(lowerMessage, "who are you")) {
    return `Oh, that's ${knowledgeBase.personal.name}! He's a ${knowledgeBase.personal.title}. Basically, he's that guy who turns ideas into code and somehow makes it work!\n\n${knowledgeBase.personal.personality}\n\n${knowledgeBase.personal.quirks}`
  }
  
  if (fuzzyMatch(lowerMessage, "full name") || fuzzyMatch(lowerMessage, "complete name")) {
    return `Oh yeah, that's ${knowledgeBase.personal.name} - Rohan Bandari!\n\nHe's a ${knowledgeBase.personal.title} who's obsessed with making things work. ${knowledgeBase.personal.personality}\n\nFun fact: His name means 'ascending' in Sanskrit, which is pretty fitting since he's always trying to level up his coding game!`
  }
  
  if (fuzzyMatch(lowerMessage, "contact") || fuzzyMatch(lowerMessage, "email") || fuzzyMatch(lowerMessage, "phone")) {
    return `Sure thing! Here's how to get in touch with Rohan:\n\nEmail: ${knowledgeBase.personal.email}\nPhone: ${knowledgeBase.personal.phone}\nLocation: ${knowledgeBase.personal.location}\n\nHe'll probably respond faster than his code compiles (which isn't saying much, but hey, he tries!)`
  }
  
  if (fuzzyMatch(lowerMessage, "where") || fuzzyMatch(lowerMessage, "location") || fuzzyMatch(lowerMessage, "stay") || fuzzyMatch(lowerMessage, "live") || fuzzyMatch(lowerMessage, "chennai")) {
    return `Rohan is from ${knowledgeBase.personal.hometown} but currently lives in ${knowledgeBase.personal.location}!`
  }
  
  if (fuzzyMatch(lowerMessage, "hyderabad") || fuzzyMatch(lowerMessage, "from")) {
    return `Yeah, Rohan is from ${knowledgeBase.personal.hometown}!\n\nBorn and raised there, but currently living in ${knowledgeBase.personal.location} for college. Hyderabad has the best biryani though - nothing beats that!\n\nHe's studying at ${knowledgeBase.personal.college}, ${knowledgeBase.personal.year}. College life is pretty hectic with all the coding and debugging, but it's fun!`
  }
  
  if (fuzzyMatch(lowerMessage, "college") || fuzzyMatch(lowerMessage, "university") || fuzzyMatch(lowerMessage, "srm") || fuzzyMatch(lowerMessage, "studying")) {
    return `Oh yeah, Rohan is at ${knowledgeBase.personal.college}!\n\nHe's studying ${knowledgeBase.personal.course} with specialization in ${knowledgeBase.personal.specialization}. Currently in his ${knowledgeBase.personal.year}. It's pretty cool - lots of coding and debugging happening there!\n\nCollege life is busy but fun. Between classes, IoT projects, and trying to figure out why his code isn't working, there's never a dull moment!`
  }
  
  if (fuzzyMatch(lowerMessage, "internship") || fuzzyMatch(lowerMessage, "job") || fuzzyMatch(lowerMessage, "hire") || fuzzyMatch(lowerMessage, "work") || fuzzyMatch(lowerMessage, "opportunity") || fuzzyMatch(lowerMessage, "looking for")) {
    return `Oh yeah, absolutely! ${knowledgeBase.personal.internship}\n\nHe's actively looking for:\n• Internships (especially since he's in ${knowledgeBase.personal.year})\n• Freelance projects\n• Cool collaborations\n• Any interesting opportunities\n\n${knowledgeBase.personal.workStyle}\n\nHe loves working on challenging stuff and learning new tech. Whether it's a startup, big company, or just a really cool project, he's totally game!\n\nLet's build something awesome together! Hit him up at ${knowledgeBase.personal.email}`
  }
  
  if (fuzzyMatch(lowerMessage, "personality") || fuzzyMatch(lowerMessage, "what are you like")) {
    return `Oh man, that's a loaded question!\n\n${knowledgeBase.personal.personality}\n\n${knowledgeBase.personal.quirks}\n\n${knowledgeBase.personal.workStyle}\n\n${knowledgeBase.personal.humor}\n\nBasically, he's that developer who brings snacks to debugging sessions and laughs at his own code jokes!`
  }
  
  // Skills and expertise
  if (lowerMessage.includes("skill") || lowerMessage.includes("technology") || lowerMessage.includes("tech stack")) {
    return `Oh yeah, Rohan's tech stack! Here's what he works with:\n\nFrontend: ${knowledgeBase.skills.frontend.join(", ")}\nBackend: ${knowledgeBase.skills.backend.join(", ")}\nDatabase: ${knowledgeBase.skills.database.join(", ")}\nTools: ${knowledgeBase.skills.tools.join(", ")}\n\nHis favorites:\n${knowledgeBase.skills.favorites["Frontend"]}\n${knowledgeBase.skills.favorites["Styling"]}\n${knowledgeBase.skills.favorites["Backend"]}\n\nHe's always learning new stuff though - the tech world moves faster than his code compilation!`
  }
  
  if (lowerMessage.includes("expertise") || lowerMessage.includes("specialize") || lowerMessage.includes("what do you do")) {
    return `Oh, Rohan's expertise? Let me think...\n\n${knowledgeBase.expertise.primary.map(exp => `• ${exp}: ${knowledgeBase.expertise.description[exp as keyof typeof knowledgeBase.expertise.description]}`).join("\n")}\n\nAnd some other stuff he's pretty good at:\n${Object.entries(knowledgeBase.expertise.specialties).map(([skill, desc]) => `• ${skill}: ${desc}`).join("\n")}\n\nBasically, he's a jack of all trades, master of some!`
  }
  
  if (lowerMessage.includes("favorite") || lowerMessage.includes("prefer")) {
    return `Oh man, Rohan's tech crushes!\n\n${Object.entries(knowledgeBase.skills.favorites).map(([category, reason]) => `${category}: ${reason}`).join("\n")}\n\nBut honestly, he's always learning new stuff. The tech world moves faster than his code compilation, and that's saying something!`
  }
  
  // Projects
  if (lowerMessage.includes("project") || lowerMessage.includes("work") || lowerMessage.includes("portfolio")) {
    const liveProjects = knowledgeBase.projects.filter(p => p.status === "live")
    const inDevProjects = knowledgeBase.projects.filter(p => p.status === "in-development")
    
    return `Oh yeah, Rohan's projects! Here's what he's been working on:\n\n${liveProjects.length} Live & Kicking:\n${liveProjects.map(p => `• ${p.title} - ${p.description}`).join("\n")}\n\n${inDevProjects.length} Still in the Lab:\n${inDevProjects.map(p => `• ${p.title} - ${p.description}`).join("\n")}\n\n${knowledgeBase.skills.experience["Projects"]} - from simple stuff to complex systems!`
  }
  
  if (lowerMessage.includes("finance") || lowerMessage.includes("money")) {
    const project = knowledgeBase.projects.find(p => p.title.toLowerCase().includes("finance"))
    return `Oh yeah, Rohan's Finance Management System!\n\n${project?.description}\n\nBuilt with: ${project?.technologies.join(", ")}\nLive at: ${project?.liveUrl}\n\n${project?.funFact}\n\nBecause let's be honest, adulting is hard enough without having to manually track every penny!`
  }
  
  if (lowerMessage.includes("pet") || lowerMessage.includes("adoption")) {
    const project = knowledgeBase.projects.find(p => p.title.toLowerCase().includes("pet"))
    return `Oh, Rohan's Pet Adoption System!\n\n${project?.description}\n\nBuilt with: ${project?.technologies.join(", ")}\nLive at: ${project?.liveUrl}\n\n${project?.funFact}\n\nThis one's close to his heart - helping pets find their forever homes!`
  }
  
  if (lowerMessage.includes("ai") || lowerMessage.includes("recipe")) {
    const project = knowledgeBase.projects.find(p => p.title.toLowerCase().includes("ai"))
    return `Oh, Rohan's AI Recipe Generator!\n\n${project?.description}\n\nBuilt with: ${project?.technologies.join(", ")}\nLive at: ${project?.liveUrl}\n\n${project?.funFact}\n\nSometimes you just need AI to tell you what to cook when you're staring at your fridge like it's a foreign object!`
  }
  
  if (lowerMessage.includes("rfid") || lowerMessage.includes("payment")) {
    const project = knowledgeBase.projects.find(p => p.title.toLowerCase().includes("rfid"))
    return `My RFID Payment System - making payments as easy as waving a magic wand!\n\n${project?.description}\n\nBuilt with: ${project?.technologies.join(", ")}\nLive at: ${project?.liveUrl}\n\nBecause who has time for cash anymore?`
  }
  
  if (lowerMessage.includes("expense") || lowerMessage.includes("tracker")) {
    const project = knowledgeBase.projects.find(p => p.title.toLowerCase().includes("expense"))
    return `My Expense Tracker - because my wallet and I need to have a serious talk!\n\n${project?.description}\n\nBuilt with: ${project?.technologies.join(", ")}\nLive at: ${project?.liveUrl}\n\nNow I can't ignore my spending habits anymore!`
  }
  
  // Experience and background
  if (lowerMessage.includes("experience") || lowerMessage.includes("background") || lowerMessage.includes("years")) {
    return `${knowledgeBase.personal.background}\n\n${knowledgeBase.personal.approach}\n\n${knowledgeBase.skills.experience["Years"]}\n${knowledgeBase.skills.experience["Projects"]}\n${knowledgeBase.skills.experience["Skills"]}\n${knowledgeBase.skills.experience["Internships"]}\n\nFor the complete picture, you can download his resume!`
  }
  
  // Collaboration and work
  if (lowerMessage.includes("hire") || lowerMessage.includes("work together") || lowerMessage.includes("collaborate")) {
    return `Ready to create something amazing together?\n\nI'm always excited to work on new projects and collaborate with forward-thinking individuals and companies. Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you!\n\n${knowledgeBase.personal.workStyle}\n\nLet's turn your ideas into reality! Contact me at ${knowledgeBase.personal.email}`
  }
  
  if (lowerMessage.includes("social") || lowerMessage.includes("linkedin") || lowerMessage.includes("github") || lowerMessage.includes("dribbble")) {
    return `Oh yeah, let's connect! Rohan is social (when he's not debugging):\n\n• LinkedIn: ${knowledgeBase.social.linkedin}\n• GitHub: ${knowledgeBase.social.github}\n• Dribbble: ${knowledgeBase.social.dribbble}\n• Behance: ${knowledgeBase.social.behance}\n• Twitter: ${knowledgeBase.social.twitter}\n\nHe promises his social media is more active than his GitHub on weekends!\n\nCheck out his projects on GitHub - he's got some cool stuff there!`
  }
  
  if (lowerMessage.includes("resume") || lowerMessage.includes("cv") || lowerMessage.includes("download")) {
    return `Sure! You can download Rohan's resume here:\n\n📄 Resume: /Rohan-CV.pdf\n\nIt has all the details about his experience, skills, projects, and achievements. Perfect for when you want the full picture!`
  }
  
  if (lowerMessage.includes("leadership") || lowerMessage.includes("president") || lowerMessage.includes("founders club") || lowerMessage.includes("dbug labs")) {
    return `Oh yeah, Rohan has some great leadership experience!\n\nHe's currently President of the Founders Club, where he spearheaded strategic planning initiatives across 5 workstreams, resulting in 40% increase in member engagement.\n\nHe's also Events Lead at Dbug Labs, where he executed end-to-end project management for 3 large-scale hackathons, engaging 200+ participants with 95% satisfaction rate.\n\nPlus, he's a Volunteer at the Student Placement Team, collaborating with corporate partners for student placements.\n\nPretty impressive for a college student, right?`
  }
  

  
  if (lowerMessage.includes("bug") || lowerMessage.includes("debug")) {
    return `Oh man, debugging!\n\n${knowledgeBase.personal.quirks}\n\nHe can debug faster than you can say 'it works on my machine' - though sometimes he wishes he couldn't!\n\nRemember: Every bug is just a feature that hasn't been properly documented yet. That's what he tells himself anyway!\n\nDebugging is like being a detective, except the criminal is your own code and the victim is your sanity!`
  }
  
  if (lowerMessage.includes("css") || lowerMessage.includes("styling")) {
    return `Oh CSS, Rohan's old friend!\n\n${knowledgeBase.personal.quirks}\n\n${knowledgeBase.skills.favorites["Styling"]}\n\nHe once spent 3 hours centering a div. Was it worth it? Absolutely not, but he learned something!\n\nCSS is like that friend who's amazing but also drives you crazy sometimes. They have a love-hate relationship, but mostly love (don't tell anyone he said that)!`
  }
  
  if (lowerMessage.includes("food") || lowerMessage.includes("biryani") || lowerMessage.includes("chicken") || lowerMessage.includes("eat") || lowerMessage.includes("favorite")) {
    return `Oh man, ${knowledgeBase.personal.food}\n\nBiryani is basically life - especially the Hyderabadi one! And Chicken 65? That's like the perfect snack when you're debugging and need something spicy to wake you up!\n\nHe's pretty sure his code quality improves significantly after a good biryani meal. Food is fuel, right?`
  }
  
  if (lowerMessage.includes("girlfriend") || lowerMessage.includes("gf") || lowerMessage.includes("relationship") || lowerMessage.includes("single") || lowerMessage.includes("dating")) {
    return `${knowledgeBase.personal.relationship}`
  }
  
  if (lowerMessage.includes("iot") || lowerMessage.includes("internet of things") || lowerMessage.includes("specialization") || lowerMessage.includes("cse")) {
    return `Oh yeah, Rohan is studying ${knowledgeBase.personal.course} with specialization in ${knowledgeBase.personal.specialization}!\n\nHe's at ${knowledgeBase.personal.college}, currently in his ${knowledgeBase.personal.year}. IoT is pretty cool - it's all about connecting devices and making them smart!\n\nBetween learning about sensors, embedded systems, and web development, he's got a pretty diverse skill set. Plus, IoT projects are always fun because you get to work with both hardware and software!`
  }
  
  if (lowerMessage.includes("pursuing") || lowerMessage.includes("studying") || lowerMessage.includes("course") || lowerMessage.includes("degree")) {
    return `Rohan is pursuing ${knowledgeBase.personal.course} with specialization in ${knowledgeBase.personal.specialization}!\n\nHe's at ${knowledgeBase.personal.college}, currently in his ${knowledgeBase.personal.year}. It's a pretty cool combination - he gets to learn both traditional computer science stuff and cutting-edge IoT technology!\n\nBetween coding, and trying to figure out why his luck is the worst, he's got his hands full!`
  }
  
  // Default response
  return `Hey, I don't really understand what you're asking. Kindly cross check or ask me in a way I understand. Thank you!\n\nPS: I'm not dumb, I don't know why Rohan calls me that!`
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
      text: "Hey there! I'm RBot 🤖 - your friendly AI assistant who knows everything about Rohan! I can tell you about his skills, projects, experience, and more. What would you like to know?",
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
        <div className="notification-badge">Talk to RBot</div>
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
            <h3>RBot 🤖</h3>
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
                {message.timestamp.getHours().toString().padStart(2, '0')}:{message.timestamp.getMinutes().toString().padStart(2, '0')}
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