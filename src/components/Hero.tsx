"use client"

import React from "react"
import TopNavbar from "./TopNavbar"
import "./Hero.css"

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <TopNavbar />
      <div className="hero-background">
        <div className="hero-watermark-bg"></div>
        <div className="hero-watermark">ROHAN BANDARI</div>
        <div className="hero-image">
          <img
            src="/rohan-new.jpg"
            alt="Rohan"
            className="profile-photo"
            width={900}
            height={650}
          />
        </div>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="landing-page-label"></div>
        <div className="hero-text">
          <h1 className="hero-name slide-in">Rohan Bandari</h1>
          <div className="hero-roles">
            <span className="hero-role-static"></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
