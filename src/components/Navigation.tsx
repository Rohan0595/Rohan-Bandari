"use client"

import type React from "react"
import "./Navigation.css"

interface NavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "connect", label: "Connect" },
  ]

  return (
    <nav className="navigation">
      <div className="nav-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`nav-tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navigation
