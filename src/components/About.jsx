import React from 'react'
import { motion } from 'framer-motion'
import { Terminal, Award, BookOpen, Layers } from 'lucide-react'

const stats = [
  { icon: <Layers size={22} />, value: "3+", label: "Advanced Projects", color: "var(--accent-cyan)" },
  { icon: <Award size={22} />, value: "5+", label: "Industry Certs", color: "var(--accent-purple)" },
  { icon: <BookOpen size={22} />, value: "MCA", label: "SASTRA Candidate", color: "var(--accent-blue)" },
  { icon: <Terminal size={22} />, value: "10+", label: "Tools & Languages", color: "var(--accent-magenta)" }
]

function About() {
  return (
    <section id="about" style={{
      padding: '5rem 0',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3.5rem'
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
            About <span className="text-gradient">Me</span>
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

        {/* Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center',
          '@media (min-width: 992px)': {
            gridTemplateColumns: '1.2fr 1fr'
          }
        }} className="about-grid">
          
          {/* Detailed Paragraph with glass panels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}
          >
            <div className="glass-panel" style={{
              padding: '2.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              borderLeft: '4px solid var(--accent-cyan)'
            }}>
              <h3 style={{
                fontSize: '1.35rem',
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-primary)'
              }}>
                Engineering the Future of Intelligent Systems
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: '1.7' }}>
                I am a dedicated Computer Science undergraduate currently pursuing my Master of Computer Applications (MCA) at SASTRA Deemed University. With a robust coding background in Python and C++, I build scalable applications anchored in solid computer science principles.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: '1.7' }}>
                My core expertise lies at the intersection of AI integration and full-stack development, with a specific focus on Retrieval-Augmented Generation (RAG) pipelines, Explainable Machine Learning models, and database systems. I thrive on translating abstract theoretical concepts into production-grade automation.
              </p>
            </div>
          </motion.div>

          {/* Stats Column */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.25rem'
          }}>
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-panel"
                style={{
                  padding: '1.5rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.75rem',
                  cursor: 'default'
                }}
              >
                <div style={{
                  color: stat.color,
                  background: 'rgba(255, 255, 255, 0.02)',
                  padding: '10px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {stat.icon}
                </div>
                <h4 style={{
                  fontSize: '2rem',
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--text-primary)',
                  fontWeight: '800'
                }}>
                  {stat.value}
                </h4>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  fontWeight: '500',
                  letterSpacing: '0.5px'
                }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        .about-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1.2fr 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

export default About
