"use client"

import type React from "react"
import "./Contact.css"

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-text">
            <h2>Let's Create Something Amazing Together</h2>
            <p>
              I'm always excited to work on new projects and collaborate with forward-thinking individuals and
              companies. Whether you have a specific project in mind or just want to explore possibilities, I'd love to
              hear from you.
            </p>

            <div className="contact-info">
              <div className="contact-item">
                <h4>Email</h4>
                <a href="mailto:rohan@example.com">rohan@example.com</a>
              </div>
              <div className="contact-item">
                <h4>Phone</h4>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </div>
              <div className="contact-item">
                <h4>Location</h4>
                <span>Available Worldwide</span>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link">
                LinkedIn
              </a>
              <a href="#" className="social-link">
                Dribbble
              </a>
              <a href="#" className="social-link">
                Behance
              </a>
              <a href="#" className="social-link">
                Twitter
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows={6} required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="contact-footer">
          <p>&copy; 2024 Rohan Bandari. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
