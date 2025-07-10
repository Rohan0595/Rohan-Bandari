"use client"

import type React from "react"
import "./Testimonials.css"

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechFlow Solutions",
      content:
        "Rohan's design expertise transformed our user experience completely. His attention to detail and user-centered approach resulted in a 40% increase in user engagement.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO",
      company: "StartupHub Inc",
      content:
        "Working with Rohan was exceptional. He delivered beyond our expectations and his Webflow development skills are top-notch. Highly recommended!",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Digital Creative Agency",
      content:
        "Rohan's ability to translate complex requirements into beautiful, functional designs is remarkable. He's a true professional and a pleasure to work with.",
      rating: 5,
    },
    {
      id: 4,
      name: "David Kim",
      role: "Founder",
      company: "Creative Studios",
      content:
        "The brand identity system Rohan created for us perfectly captured our vision. His creative process and communication throughout the project were excellent.",
      rating: 5,
    },
  ]

  return (
    <section className="testimonials-tab">
      <div className="container">
        <h2 className="section-title">Client Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <span key={index} className="star">
                      ★
                    </span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.content}"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
