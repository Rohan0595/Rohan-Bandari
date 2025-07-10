"use client"

import type React from "react"
import { useState } from "react"
import Navigation from "./Navigation"
import Experience from "./Experience"
import Projects from "./Projects"
import Skills from "./Skills"
import Connect from "./Connect"
import "./Portfolio.css"

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState("skills")

  const renderActiveTab = () => {
    switch (activeTab) {
      case "skills":
        return <Skills />
      case "projects":
        return <Projects />
      case "experience":
        return <Experience />
      case "connect":
        return <Connect />
      default:
        return <Skills />
    }
  }

  return (
    <div className="portfolio">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="portfolio-content">{renderActiveTab()}</div>
    </div>
  )
}

export default Portfolio
