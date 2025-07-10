"use client"

import type React from "react"
import "./Skills.css"

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind", "shadcn", "Material UI", "Chakra UI", "Node.js", "Express", "Hono", "C", "C++", "Python", "MongoDB", "PostgreSQL", "MySQL", "Git", "GitHub", "Docker", "REST API", "Vercel", "Netlify"
]

const Skills: React.FC = () => {
  return (
    <div className="skills-badge-container">
      {skills.map((skill, idx) => (
        <span className="skill-badge" key={idx}>{skill}</span>
      ))}
    </div>
  )
}

export default Skills 