import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from 'lucide-react'

function Hero() {
  const handlePrint = () => {
    window.print()
  }

  // Subtitles that typify Gayathri's skill set
  const titles = ["AI & RAG Engineer", "Machine Learning Developer", "Python Backend Developer"]

  // We can create a simple container reveal animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '6rem',
      paddingBottom: '3rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Orbs in background */}
      <div style={{
        position: 'absolute',
        top: '25%',
        right: '5%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(0, 242, 254, 0.08) 0%, transparent 70%)',
        zIndex: '-1',
        borderRadius: '50%'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(138, 43, 226, 0.08) 0%, transparent 70%)',
        zIndex: '-1',
        borderRadius: '50%'
      }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center',
          textAlign: 'center',
          '@media (min-width: 992px)': {
            gridTemplateColumns: '1.2fr 0.8fr',
            textAlign: 'left'
          }
        }} className="hero-grid">
          
          {/* Left Text Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}
            className="hero-text-col"
          >
            <motion.span 
              variants={itemVariants}
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--accent-cyan)',
                fontWeight: '600',
                letterSpacing: '3px',
                fontSize: '0.9rem',
                textTransform: 'uppercase'
              }}
            >
              Welcome to my portfolio
            </motion.span>
            
            <motion.h1 
              variants={itemVariants}
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                lineHeight: '1.1',
                fontWeight: '800'
              }}
            >
              Hi, I'm <br />
              <span className="text-gradient">Gayathri B</span>
            </motion.h1>

            <motion.div 
              variants={itemVariants}
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-secondary)',
                fontWeight: '500',
                display: 'flex',
                gap: '0.5rem',
                height: '40px',
                alignItems: 'center'
              }}
            >
              <span style={{ color: 'var(--accent-cyan)' }}>&lt;</span>
              <motion.div
                animate={{
                  opacity: [0, 1, 1, 0],
                  y: [10, 0, 0, -10]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  times: [0, 0.1, 0.9, 1]
                }}
              >
                RAG & GenAI Specialist
              </motion.div>
              <span style={{ color: 'var(--accent-cyan)' }}>/&gt;</span>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              style={{
                color: 'var(--text-secondary)',
                maxWidth: '600px',
                fontSize: '1.05rem',
                lineHeight: '1.7',
                margin: '0.5rem 0'
              }}
            >
              Computer Science graduate specializing in Python, Machine Learning, AI automation, and Retrieval-Augmented Generation (RAG). Passionate about engineering high-performance, context-grounded AI applications and robust software.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={itemVariants}
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                marginTop: '1rem',
                justifyContent: 'center'
              }}
              className="hero-ctas"
            >
              <a href="#projects" className="btn btn-primary">
                Explore Projects <ArrowRight size={18} />
              </a>
              <a href="/Gayathri_B_Resume.pdf" download="Gayathri_B_Resume.pdf" className="btn btn-secondary">
                Get Resume <Download size={18} />
              </a>
            </motion.div>

            {/* Quick Contacts */}
            <motion.div 
              variants={itemVariants}
              style={{
                display: 'flex',
                gap: '1.25rem',
                marginTop: '1.5rem',
                fontSize: '1.5rem'
              }}
            >
              {[
                { icon: <Github size={20} />, href: "https://github.com/gayathrib0829" },
                { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/gayathri-b" },
                { icon: <Mail size={20} />, href: "mailto:gayathrib0829@gmail.com" },
                { icon: <Phone size={20} />, href: "tel:+919942263139" }
              ].map((social, idx) => (
                <motion.a 
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: 'var(--accent-cyan)' }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    color: 'var(--text-secondary)',
                    transition: 'color 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px',
                    borderRadius: '50%',
                    background: 'var(--contact-btn-bg)',
                    border: '1px solid var(--card-border)'
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image/Orb Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            {/* Interactive Image Frame */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              style={{
                position: 'relative',
                width: 'min(320px, 80vw)',
                height: 'min(320px, 80vw)',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                background: 'linear-gradient(135deg, var(--accent-cyan) 0%, var(--accent-purple) 100%)',
                padding: '4px',
                boxShadow: '0 10px 30px rgba(0, 242, 254, 0.2)',
                cursor: 'pointer',
                overflow: 'hidden'
              }}
              animate={{
                borderRadius: [
                  '30% 70% 70% 30% / 30% 30% 70% 70%',
                  '50% 50% 30% 70% / 50% 60% 40% 50%',
                  '60% 40% 60% 40% / 40% 50% 50% 60%',
                  '30% 70% 70% 30% / 30% 30% 70% 70%'
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <div style={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                borderRadius: 'inherit',
                background: 'var(--bg-dark-2)'
              }}>
                <img 
                  src="/profile.jpg" 
                  alt="Gayathri B" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  className="hero-avatar"
                />
              </div>
            </motion.div>

            {/* Glowing background ring */}
            <div style={{
              position: 'absolute',
              top: '-10px',
              left: '-10px',
              right: '-10px',
              bottom: '-10px',
              borderRadius: 'inherit',
              border: '2px solid rgba(0, 242, 254, 0.1)',
              zIndex: '-1',
              pointerEvents: 'none'
            }} />
          </motion.div>
          
        </div>
      </div>

      <style>{`
        .hero-grid {
          text-align: center;
        }
        .hero-text-col {
          align-items: center;
        }
        .hero-ctas {
          justify-content: center;
        }
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
            text-align: left !important;
          }
          .hero-text-col {
            align-items: flex-start !important;
          }
          .hero-ctas {
            justify-content: flex-start !important;
          }
        }
        .hero-avatar:hover {
          transform: scale(1.08);
        }
      `}</style>
    </section>
  )
}

export default Hero
