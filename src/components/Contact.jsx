import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    
    setStatus('sending')
    // Simulate API call for premium UI feedback
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    }, 1500)
  }

  return (
    <section id="contact" style={{
      padding: '5rem 0',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: '2.25rem',
              fontWeight: '800',
              fontFamily: 'var(--font-heading)'
            }}
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              height: '3px',
              background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-blue))',
              margin: '0.75rem auto 0 auto',
              borderRadius: '2px'
            }}
          />
        </div>

        {/* Content Layout Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'stretch',
          '@media (min-width: 992px)': {
            gridTemplateColumns: '0.9fr 1.1fr'
          }
        }} className="contact-grid">
          
          {/* Left Column: Direct info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', fontWeight: '700' }}>
                  Let's discuss a project!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  I'm always open to discussing new opportunities, full-stack application development, or AI automation ideas. Drop me a line!
                </p>
              </div>

              {/* Direct Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { icon: <Mail size={18} />, title: "Email Me", detail: "gayathrib0829@gmail.com", href: "mailto:gayathrib0829@gmail.com", color: "var(--accent-cyan)" },
                  { icon: <Phone size={18} />, title: "Call Me", detail: "+91 9942263139", href: "tel:+919942263139", color: "var(--accent-blue)" },
                  { icon: <MapPin size={18} />, title: "Location", detail: "Tamil Nadu, India", href: "#", color: "var(--accent-purple)" }
                ].map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.href}
                    whileHover={{ x: 5 }}
                    className="glass-panel"
                    style={{
                      padding: '1.15rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      textDecoration: 'none',
                      color: 'inherit'
                    }}
                  >
                    <div style={{
                      color: item.color,
                      background: 'rgba(255, 255, 255, 0.02)',
                      padding: '8px',
                      borderRadius: '10px',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: '600', marginTop: '2px' }}>{item.detail}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Socials Connection */}
            <div className="glass-panel" style={{
              padding: '1.5rem 2rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '500' }}>Find me online:</span>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a href="https://github.com/gayathrib0829" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '8px 12px', fontSize: '0.85rem' }}>
                  <Github size={16} /> GitHub
                </a>
                <a href="https://linkedin.com/in/gayathri-b" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '8px 12px', fontSize: '0.85rem' }}>
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel"
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <AnimatePresence mode="wait">
              {status !== 'success' ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                >
                  <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-heading)', fontWeight: '700', marginBottom: '0.5rem' }}>
                    Send a Message
                  </h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={inputStyle}
                      className="form-input-focus"
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="your@email.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle}
                      className="form-input-focus"
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600' }}>Message</label>
                    <textarea 
                      required
                      rows={5} 
                      placeholder="Write your message here..." 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ ...inputStyle, resize: 'none' }}
                      className="form-input-focus"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'sending'}
                    className="btn btn-primary"
                    style={{
                      marginTop: '0.5rem',
                      justifyContent: 'center',
                      width: '100%',
                      background: status === 'sending' ? 'var(--text-muted)' : undefined,
                      cursor: status === 'sending' ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {status === 'sending' ? 'Sending Message...' : (
                      <>Send Message <Send size={16} /></>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 100 }}
                  style={{
                    textAlign: 'center',
                    padding: '2rem 0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.25rem'
                  }}
                >
                  <CheckCircle2 size={64} style={{ color: 'var(--accent-cyan)' }} />
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: 'var(--font-heading)' }}>Message Sent!</h3>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.95rem' }}>
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </div>
                  <button 
                    onClick={() => setStatus('idle')} 
                    className="btn btn-secondary"
                    style={{ marginTop: '1rem', padding: '0.5rem 1.25rem' }}
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>

      <style>{`
        .contact-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
        .form-input-focus:focus {
          outline: none;
          border-color: var(--accent-cyan) !important;
          box-shadow: 0 0 8px rgba(0, 242, 254, 0.1);
        }
      `}</style>
    </section>
  )
}

const inputStyle = {
  background: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid var(--card-border)',
  borderRadius: '8px',
  padding: '0.75rem 1rem',
  color: 'var(--text-primary)',
  fontSize: '0.92rem',
  fontFamily: 'var(--font-body)',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
}

export default Contact
