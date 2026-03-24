import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Senior Frontend Developer',
    company: 'TechCorp Solutions',
    content: 'Bicky is an exceptional developer with strong problem-solving skills. His attention to detail and commitment to writing clean, maintainable code makes him a valuable team member.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Michael Chen',
    role: 'Full Stack Developer',
    company: 'InnovateLab',
    content: 'Working with Bicky on the AgriMarket project was a great experience. His technical skills in React and Node.js are impressive, and he consistently delivers high-quality solutions.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Project Manager',
    company: 'Digital Ventures',
    content: 'Bicky demonstrates excellent communication skills and technical expertise. He quickly adapts to new technologies and always meets project deadlines with outstanding results.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section" data-aos="fade-up">
      <div className="container">
        <h2>What People Say</h2>
        <p className="section-subtitle">Testimonials from colleagues and mentors</p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="testimonial-header">
                <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                  <p className="testimonial-company">{testimonial.company}</p>
                </div>
              </div>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>
              <blockquote className="testimonial-quote">
                <FaQuoteLeft className="quote-icon" />
                {testimonial.content}
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
