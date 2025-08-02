"use client"

import type React from "react"
import "./Experience.css"

const Experience: React.FC = () => {
  return (
    <div className="experience-container">
      <section className="experience">
        <div className="container">
          <h2 className="section-title">Leadership Experience</h2>
          
          <div className="timeline">
            {/* Leadership Experience */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>
              <div className="timeline-content">
                <div className="experience-header">
                  <span className="experience-period">Feb 2025 – Present</span>
                  <h3 className="experience-title">President, Founders Club</h3>
                </div>
                <ul className="experience-achievements">
                  <li>Spearheaded strategic planning initiatives across 5 workstreams, resulting in significant increase in member engagement.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>
              <div className="timeline-content">
                <div className="experience-header">
                  <span className="experience-period">Oct 2024 – Present</span>
                  <h3 className="experience-title">Events Lead, Dbug Labs</h3>
                </div>
                <ul className="experience-achievements">
                  <li>Executed end-to-end project management, engaging 200+ participants and achieving a massive satisfaction rate.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <div className="experience-header">
                  <span className="experience-period">Sep 2023 – Apr 2025</span>
                  <h3 className="experience-title">Volunteer, Placfvs (Student Placement Team)</h3>
                </div>
                <ul className="experience-achievements">
                  <li>Collaborated with corporate partners to conduct structured interviews</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience
