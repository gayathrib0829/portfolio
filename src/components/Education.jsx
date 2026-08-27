import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react'

const educationHistory = [
  {
    year: "2025 - Present",
    degree: "Master of Computer Applications (MCA)",
    institution: "SASTRA Deemed University",
    details: "Ongoing postgraduate research in software systems, database structures, and advanced computational networks."
  },
  {
    year: "2022 - 2025",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Holy Cross College",
    details: "Graduated with 7.1 GPA. Studied core computer science curricula including software engineering, data structures, and object-oriented programming."
  },
  {
    year: "2021 - 2022",
    degree: "HSC (XII)",
    institution: "St.Joseph Higher Secondary School",
    details: "Achieved 81%. Specialized study in Science and Mathematics."
  },
  {
    year: "2019 - 2020",
    degree: "SSLC (X)",
    institution: "St.Joseph Higher Secondary School",
    details: "Achieved 76% in General Secondary Curricula."
  }
]

const certificationsList = [
  { name: "AI Agents Course", issuer: "Hugging Face", year: "2026" },
  { name: "Introduction to Machine Learning", issuer: "Kaggle", year: "2026" },
  { name: "The Complete Full-Stack Web Development", issuer: "Udemy", year: "2025" },
  { name: "Data Analytics & Visualization Job Simulation", issuer: "Accenture (Forage)", year: "2024" },
  { name: "Meta - Introduction to Front-End Development", issuer: "Coursera", year: "2023" }
]

function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 14 }
    }
  }

  return (
    <section id="education" style={{
      padding: '5rem 0',
      background: 'rgba(6, 9, 19, 0.3)',
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
            Education & <span className="text-gradient">Credentials</span>
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
          '@media (min-width: 992px)': {
            gridTemplateColumns: '1.2fr 0.8fr'
          }
        }} className="edu-grid">
          
          {/* Left Column: Education Timeline */}
          <div>
            <h3 style={{
              fontSize: '1.4rem',
              fontFamily: 'var(--font-heading)',
              color: 'var(--text-primary)',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <GraduationCap style={{ color: 'var(--accent-cyan)' }} />
              Academic Path
            </h3>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                position: 'relative',
                paddingLeft: '1.5rem',
                borderLeft: '2px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              {educationHistory.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="glass-panel"
                  style={{
                    padding: '1.5rem',
                    position: 'relative'
                  }}
                >
                  {/* Timeline node node indicator */}
                  <div style={{
                    position: 'absolute',
                    top: '24px',
                    left: '-31px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: idx === 0 ? 'var(--accent-cyan)' : 'var(--bg-dark-2)',
                    border: `3px solid ${idx === 0 ? 'var(--accent-cyan)' : 'var(--accent-blue)'}`,
                    boxShadow: idx === 0 ? 'var(--shadow-glow-cyan)' : 'none'
                  }} />

                  {/* Node Context */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--accent-cyan)',
                    fontSize: '0.82rem',
                    fontWeight: '600',
                    fontFamily: 'var(--font-heading)',
                    marginBottom: '0.4rem'
                  }}>
                    <Calendar size={14} /> {edu.year}
                  </div>
                  
                  <h4 style={{
                    fontSize: '1.1rem',
                    color: 'var(--text-primary)',
                    fontWeight: '700'
                  }}>
                    {edu.degree}
                  </h4>
                  
                  <p style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    fontWeight: '500',
                    marginBottom: '0.5rem'
                  }}>
                    {edu.institution}
                  </p>
                  
                  <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    lineHeight: '1.5'
                  }}>
                    {edu.details}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Certifications */}
          <div>
            <h3 style={{
              fontSize: '1.4rem',
              fontFamily: 'var(--font-heading)',
              color: 'var(--text-primary)',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Award style={{ color: 'var(--accent-purple)' }} />
              Certifications
            </h3>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem'
              }}
            >
              {certificationsList.map((cert, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="glass-panel"
                  style={{
                    padding: '1.15rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--accent-purple)', flexShrink: 0 }} />
                    <div>
                      <h4 style={{
                        fontSize: '0.95rem',
                        color: 'var(--text-primary)',
                        fontWeight: '600'
                      }}>
                        {cert.name}
                      </h4>
                      <p style={{
                        fontSize: '0.8rem',
                        color: 'var(--text-secondary)'
                      }}>
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  
                  <span style={{
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    color: 'var(--text-muted)',
                    background: 'rgba(255,255,255,0.02)',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.03)'
                  }}>
                    {cert.year}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      <style>{`
        .edu-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 992px) {
          .edu-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Education
