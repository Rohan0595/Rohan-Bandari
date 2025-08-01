"use client"

import type React from "react"
import "./Projects.css"

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Finance Management System",
      description: "A comprehensive financial management solution with expense tracking, budget planning, and financial reporting features.",
      category: "Full Stack",
      status: "live",
      technologies: ["Tailwind CSS", "React", "TypeScript", "MySQL"],
      liveUrl: "https://finance-management-demo.vercel.app",
      githubUrl: "https://github.com/username/finance-management",
      image: "/placeholder.jpg"
    },
    {
      id: 2,
      title: "Pet Adoption and Rescue System",
      description: "A web-based Pet Adoption and Rescue System to connect shelters with potential adopters, featuring pet listings, adoption forms, and real-time updates.",
      category: "Full Stack",
      status: "live",
      technologies: ["React.js", "Node.js", "TypeScript", "Tailwind CSS", "MySQL"],
      liveUrl: "https://pet-adoption-demo.vercel.app",
      githubUrl: "https://github.com/username/pet-adoption",
      image: "/placeholder.jpg"
    },
    {
      id: 3,
      title: "RFID based Payment System",
      description: "An RFID-based Payment System enabling contactless transactions using RFID tags, with secure authentication, real-time balance updates, and usage tracking.",
      category: "Full Stack",
      status: "live",
      technologies: ["React", "Chart.js", "Tailwind CSS", "API Integration", "Responsive"],
      liveUrl: "https://rfid-payment-demo.vercel.app",
      githubUrl: "https://github.com/username/rfid-payment",
      image: "/placeholder.jpg"
    },
    {
      id: 4,
      title: "Expense Tracker",
      description: "A web-based Expense Tracker application for managing personal finances, tracking expenses, and visualizing spending patterns with interactive charts.",
      category: "Web App",
      status: "live",
      technologies: ["React", "Chart.js", "Tailwind CSS", "API Integration", "Responsive"],
      liveUrl: "https://expense-tracker-demo.vercel.app",
      githubUrl: "https://github.com/username/expense-tracker",
      image: "/placeholder.jpg"
    },
    {
      id: 5,
      title: "Task Scheduler",
      description: "A web-based Task Scheduler for organizing daily activities, setting deadlines, and tracking progress with notifications and a clean, responsive UI.",
      category: "Web App",
      status: "live",
      technologies: ["HTML", "CSS", "JavaScript", "SQLite", "Spark API", "Java"],
      liveUrl: "https://task-scheduler-demo.vercel.app",
      githubUrl: "https://github.com/username/task-scheduler",
      image: "/placeholder.jpg"
    },
    {
      id: 6,
      title: "AI Recipe Generator",
      description: "A web-based AI Recipe Generator that suggests personalized recipes using user inputs and available ingredients, with step-by-step instructions and nutrition insights.",
      category: "AI/ML",
      status: "live",
      technologies: ["React", "MongoDB", "Next Auth", "Tailwind CSS", "TypeScript", "OpenAI API"],
      liveUrl: "https://ai-recipe-demo.vercel.app",
      githubUrl: "https://github.com/username/ai-recipe-generator",
      image: "/placeholder.jpg"
    },
    {
      id: 7,
      title: "Faculty Publication Management System",
      description: "A comprehensive web-based system for managing faculty publications, research papers, and academic achievements with automated citation tracking and reporting features.",
      category: "Full Stack",
      status: "in-development",
      technologies: ["JSP", "Java", "MySQL", "Servlet", "HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/username/faculty-publication-system",
      image: "/placeholder.jpg"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'live'
      case 'in-development':
        return 'in-development'
      case 'completed':
        return 'completed'
      default:
        return 'completed'
    }
  }

  return (
    <div className="projects-tab">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Some of my recent work showcasing various technologies and solutions
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                </div>
                <span className={`project-status ${getStatusColor(project.status)}`}>
                  {project.status === 'live' ? 'Live' : 
                   project.status === 'in-development' ? 'In Development' : 'Completed'}
                </span>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-actions">
                {project.liveUrl !== "#" && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-btn primary"
                  >
                    View Project
                  </a>
                )}
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-btn secondary"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
