"use client"

import type React from "react"
import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import "./Connect.css"

const Connect: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    // Map form field names to state properties
    let stateKey = name
    if (name === 'title') stateKey = 'subject'
    
    setFormData(prev => ({ ...prev, [stateKey]: value }))
    
    // Clear error when user starts typing
    if (errors[stateKey as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [stateKey]: false }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email),
      subject: !formData.subject.trim(),
      message: !formData.message.trim()
    }
    
    setErrors(newErrors)
    
    // If there are errors, don't submit
    if (Object.values(newErrors).some(error => error)) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus("idle")
    
    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        'service_rywn79j', // Your EmailJS service ID
        'template_2jpob57', // Your EmailJS template ID
        formRef.current!,
        'ATC4ckaK8L3KvS4hI' // Your EmailJS public key
      )
      
      console.log('Email sent successfully:', result.text)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
      
      // Reset form
      if (formRef.current) {
        formRef.current.reset()
      }
      
    } catch (error) {
      console.error('Email send failed:', error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="connect-tab">
      <div className="container">
        <div className="connect-content">
          <div className="connect-text">
            <h2 className="section-title">Let's Work Together</h2>
            <p className="connect-description">
              I'm a passionate Full-Stack Developer and IoT enthusiast currently pursuing CSE with IoT specialization at SRM Institute. 
              I'm actively looking for internship opportunities and exciting collaborations. Whether you have a project in mind, 
              want to discuss IoT innovations, or just want to connect, I'd love to hear from you!
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <h4>Email</h4>
                <a href="mailto:rohanbandari0509@gmail.com">rohanbandari0509@gmail.com</a>
              </div>
              <div className="contact-method">
                <h4>Location</h4>
                <span>Chennai, India</span>
              </div>
              <div className="contact-method">
                <h4>Availability</h4>
                <span>Open for Internships & Collaborations</span>
              </div>
            </div>


          </div>

          <div className="contact-form-section">
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name" 
                    className={errors.name ? "error" : undefined}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email" 
                    className={errors.email ? "error" : undefined}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="title"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Subject" 
                  className={errors.subject ? "error" : undefined}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..." 
                  rows={6} 
                  className={errors.message ? "error" : undefined}
                ></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              
              {submitStatus === "success" && (
                <div className="success-message">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === "error" && (
                <div className="error-message">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Connect
