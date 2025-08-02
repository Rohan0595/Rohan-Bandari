"use client"

import React, { useState, useRef } from "react"
import "./Skills.css"

const Skills: React.FC = () => {
  const [skills, setSkills] = useState([
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind", "shadcn", "Material UI", "Node.js", "Express", "C", "C++", "Python", "MongoDB", "PostgreSQL", "MySQL", "Git", "GitHub", "Docker", "REST API", "Vercel", "Netlify"
  ])
  
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null)
  const dragRef = useRef<HTMLDivElement>(null)

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index)
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/html', e.currentTarget.outerHTML)
    
    // Add touch feedback for mobile
    if ('ontouchstart' in window) {
      e.currentTarget.style.transform = 'scale(0.95)'
    }
  }

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    setDragOverIndex(index)
  }

  const handleDragLeave = () => {
    setDragOverIndex(null)
  }

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault()
    
    if (draggedIndex === null || draggedIndex === dropIndex) {
      setDraggedIndex(null)
      setDragOverIndex(null)
      return
    }

    const newSkills = [...skills]
    const [draggedSkill] = newSkills.splice(draggedIndex, 1)
    newSkills.splice(dropIndex, 0, draggedSkill)
    
    setSkills(newSkills)
    setDraggedIndex(null)
    setDragOverIndex(null)
  }

  const handleDragEnd = () => {
    setDraggedIndex(null)
    setDragOverIndex(null)
    
    // Reset touch feedback for mobile
    if ('ontouchstart' in window) {
      const skillBadges = document.querySelectorAll('.skill-badge')
      skillBadges.forEach(badge => {
        (badge as HTMLElement).style.transform = ''
      })
    }
  }

  return (
    <div className="skills-badge-container">
      <div className="skills-droppable" ref={dragRef}>
        {skills.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className={`skill-badge ${
              draggedIndex === index ? 'dragging' : ''
            } ${
              dragOverIndex === index ? 'drag-over' : ''
            }`}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, index)}
            onDragEnd={handleDragEnd}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Skills 