"use client"

import type React from "react"
import "./Connect.css"

const Connect: React.FC = () => {
  return (
    <section className="connect-tab">
      <div className="container">
        <div className="connect-content">
          <div className="connect-text">
            <h2 className="section-title">Let's Work Together</h2>
            <p className="connect-description">
              I'm always excited to work on new projects and collaborate with forward-thinking individuals and
              companies. Whether you have a specific project in mind or just want to explore possibilities, I'd love to
              hear from you.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <h4>Email</h4>
                <a href="mailto:rohan@example.com">rohan@example.com</a>
              </div>
              <div className="contact-method">
                <h4>Phone</h4>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </div>
              <div className="contact-method">
                <h4>Location</h4>
                <span>Available Worldwide</span>
              </div>
            </div>

            <div className="social-links">
              <h4>Connect With Me</h4>
              <div className="social-grid">
                <a href="#" className="social-link">
                  <span>LinkedIn</span>
                </a>
                <a href="#" className="social-link">
                  <span>Dribbble</span>
                </a>
                <a href="#" className="social-link">
                  <span>Behance</span>
                </a>
                <a href="#" className="social-link">
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Project Subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Tell me about your project..." rows={6} required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Connect
