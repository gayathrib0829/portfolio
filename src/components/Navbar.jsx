import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, Code2, Sun, Moon } from 'lucide-react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
]

function Navbar({ activeSection, theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  const handlePrint = (e) => {
    e.preventDefault()
    window.print()
  }

  return (
    <header style={{
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      zIndex: '1000',
      padding: '1.25rem 0',
      background: 'rgba(6, 9, 19, 0.45)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--card-border)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <a href="#home" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          textDecoration: 'none',
          color: 'var(--text-primary)',
          fontSize: '1.35rem',
          fontFamily: 'var(--font-heading)',
          fontWeight: '800',
          letterSpacing: '-0.5px'
        }}>
          <Code2 size={24} style={{ color: 'var(--accent-cyan)' }} />
          <span>Gayathri<span className="text-gradient">.B</span></span>
        </a>

        {/* Desktop Nav Items */}
        <nav style={{
          display: 'none',
          '@media (min-width: 768px)': { display: 'flex' }
        }} className="desktop-nav-only">
          <ul style={{
            display: 'flex',
            gap: '1.5rem',
            listStyle: 'none',
            alignItems: 'center'
          }}>
            {navItems.map((item) => (
              <li key={item.id} style={{ position: 'relative' }}>
                <a
                  href={`#${item.id}`}
                  style={{
                    color: activeSection === item.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: activeSection === item.id ? '600' : '400',
                    padding: '0.5rem 0.75rem',
                    display: 'block',
                    transition: 'color 0.2s ease'
                  }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: '0.75rem',
                        right: '0.75rem',
                        height: '2px',
                        background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-blue))',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </a>
              </li>
            ))}
            <li>
              <motion.button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--btn-sec-bg)'
                }}
              >
                {theme === 'dark' ? <Sun size={18} style={{ color: '#fbbf24' }} /> : <Moon size={18} style={{ color: '#6366f1' }} />}
              </motion.button>
            </li>
            <li>
              <a href="/Gayathri_B_Resume.pdf" download="Gayathri_B_Resume.pdf" className="btn btn-secondary" style={{
                padding: '0.45rem 1rem',
                fontSize: '0.85rem',
                borderRadius: '8px'
              }}>
                Resume <ArrowUpRight size={14} />
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile controls */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <motion.button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="mobile-theme-toggle"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--btn-sec-bg)'
            }}
          >
            {theme === 'dark' ? <Sun size={18} style={{ color: '#fbbf24' }} /> : <Moon size={18} style={{ color: '#6366f1' }} />}
          </motion.button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '4px',
              display: 'block'
            }}
            className="mobile-toggle-btn"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              overflow: 'hidden',
              background: 'var(--bg-dark-2)',
              borderBottom: '1px solid var(--card-border)',
              position: 'absolute',
              top: '100%',
              left: '0',
              width: '100%',
              zIndex: '999'
            }}
          >
            <ul style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '1.5rem 2rem',
              gap: '1.25rem',
              listStyle: 'none'
            }}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    style={{
                      color: activeSection === item.id ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                      textDecoration: 'none',
                      fontSize: '1.1rem',
                      fontWeight: activeSection === item.id ? '600' : '400',
                      display: 'block'
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li style={{ paddingTop: '0.5rem' }}>
                <a href="/Gayathri_B_Resume.pdf" download="Gayathri_B_Resume.pdf" onClick={() => setIsOpen(false)} className="btn btn-primary" style={{
                  width: '100%',
                  justifyContent: 'center',
                  borderRadius: '8px'
                }}>
                  Resume <ArrowUpRight size={16} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS styling for responsiveness that Vite CSS handles */}
      <style>{`
        .mobile-toggle-btn {
          display: block;
        }
        .desktop-nav-only {
          display: none !important;
        }
        .mobile-theme-toggle {
          display: flex;
        }
        @media (min-width: 768px) {
          .mobile-toggle-btn {
            display: none !important;
          }
          .desktop-nav-only {
            display: block !important;
          }
          .mobile-theme-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  )
}

export default Navbar
