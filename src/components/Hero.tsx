"use client"

import React, { useEffect, useState } from "react"
import TopNavbar from "./TopNavbar"
import "./Hero.css"

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Designer"
];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setFade(false), 1400);
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 400);
    }, 2000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="hero">
      <TopNavbar />
      <div className="hero-background">
        <div className="hero-watermark-bg">ROHAN</div>
        <div className="hero-watermark">ROHAN BANDARI</div>
        <div className="hero-image">
          <img
            src="/Rohan.png"
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
            <span className={`hero-role-dynamic${fade ? " fade-in-role" : " fade-out-role"}`}>{roles[roleIndex]}</span>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
