"use client"

import type React from "react"
import "./About.css"

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p className="about-intro">
              I'm a passionate UI/UX Designer and Webflow Developer with a keen eye for creating exceptional digital
              experiences that bridge the gap between beautiful design and functional technology.
            </p>
            <p>
              With years of experience in the design industry, I specialize in crafting user-centered solutions that not
              only look stunning but also solve real-world problems. My approach combines creative thinking with
              technical expertise to deliver results that exceed expectations.
            </p>

            <div className="expertise">
              <h3>What I Do</h3>
              <div className="expertise-grid">
                <div className="expertise-item">
                  <h4>UI/UX Design</h4>
                  <p>Creating intuitive and engaging user interfaces that provide exceptional user experiences.</p>
                </div>
                <div className="expertise-item">
                  <h4>Webflow Development</h4>
                  <p>Building responsive, fast-loading websites using modern web technologies and best practices.</p>
                </div>
                <div className="expertise-item">
                  <h4>Brand Identity</h4>
                  <p>Developing cohesive visual identities that communicate brand values effectively.</p>
                </div>
                <div className="expertise-item">
                  <h4>Prototyping</h4>
                  <p>Creating interactive prototypes to validate ideas and improve user experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
