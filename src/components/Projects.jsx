import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, ShieldAlert } from 'lucide-react'

const projects = [
  {
    title: "Website RAG Evaluator",
    description: "A full-stack Retrieval-Augmented Generation (RAG) system that extracts and chunks website content, computes vector embeddings, and performs semantic retrieval to deliver context-grounded LLM responses. Integrates an evaluation pipeline to score retrieval relevance, answer accuracy, and citation truthfulness.",
    image: "/rag_evaluator.png",
    tags: ["Python", "FastAPI", "React", "ChromaDB", "OpenAI", "RAG", "LLMs"],
    github: "https://github.com/gayathrib0829/rag-evaluator",
    demo: "#"
  },
  {
    title: "Explainable ML for Academic Performance Prediction",
    description: "An academic score forecasting ML system. Implements regression models and a weighted voting ensemble. Leverages SHAP (SHapley Additive exPlanations) and LIME (Local Interpretable Model-agnostic Explanations) to render clear feature importances, offering deep insight into predictive indicators.",
    image: "/academic_performance.png",
    tags: ["Python", "Scikit-learn", "Pandas", "SHAP", "LIME", "Ensemble Models"],
    github: "https://github.com/gayathrib0829/academic-performance-prediction",
    demo: "#"
  },
  {
    title: "PyShop – Django E-commerce",
    description: "A complete responsive e-commerce web application featuring robust inventory management, dynamic shopping carts, quantity edits, automatic cost computation, checkout summaries, and a modern customer dashboard. Built using a robust Django database backend.",
    image: "/pyshop.png",
    tags: ["Python", "Django", "SQLite", "Bootstrap", "E-commerce"],
    github: "https://github.com/gayathrib0829/pyshop",
    demo: "#"
  }
]

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 15
      }
    }
  }

  return (
    <section id="projects" style={{
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
            Featured <span className="text-gradient">Projects</span>
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

        {/* Projects Cards Deck */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            '@media (min-width: 992px)': {
              gridTemplateColumns: 'repeat(3, 1fr)'
            }
          }}
          className="projects-deck"
        >
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="glass-panel"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                height: '100%'
              }}
            >
              {/* Card Banner Image */}
              <div style={{
                width: '100%',
                height: '200px',
                overflow: 'hidden',
                position: 'relative',
                borderBottom: '1px solid var(--card-border)'
              }}>
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  className="proj-card-img"
                />
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to bottom, transparent 60%, rgba(6, 9, 19, 0.8) 100%)',
                  pointerEvents: 'none'
                }} />
              </div>

              {/* Card Context */}
              <div style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                gap: '1rem'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--text-primary)',
                  fontWeight: '700'
                }}>
                  {proj.title}
                </h3>
                
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.92rem',
                  lineHeight: '1.6',
                  flexGrow: 1
                }}>
                  {proj.description}
                </p>

                {/* Tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginTop: '0.5rem'
                }}>
                  {proj.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      style={{
                        padding: '0.25rem 0.65rem',
                        fontSize: '0.78rem',
                        fontWeight: '500',
                        background: 'rgba(0, 242, 254, 0.05)',
                        border: '1px solid rgba(0, 242, 254, 0.1)',
                        color: 'var(--accent-cyan)',
                        borderRadius: '4px'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions Footer */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '1.25rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--card-border)'
                }}>
                  <a 
                    href={proj.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      transition: 'color 0.2s ease'
                    }}
                    className="proj-link"
                  >
                    <Github size={16} /> Code
                  </a>
                  {proj.demo !== '#' && (
                    <a 
                      href={proj.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        color: 'var(--accent-blue)',
                        textDecoration: 'none',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        transition: 'color 0.2s ease'
                      }}
                      className="proj-link"
                    >
                      Live Demo <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .projects-deck {
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .projects-deck {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 992px) {
          .projects-deck {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        .glass-panel:hover .proj-card-img {
          transform: scale(1.06);
        }
        .proj-link:hover {
          color: var(--accent-cyan) !important;
        }
      `}</style>
    </section>
  )
}

export default Projects
