import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Bot, Network, Database, Cpu, Wrench } from 'lucide-react'

const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    icon: <Terminal size={20} />,
    color: 'var(--accent-cyan)',
    skills: ['Python', 'C++', 'JavaScript', 'Go']
  },
  {
    id: 'ai',
    title: 'AI & GenAI',
    icon: <Bot size={20} />,
    color: 'var(--accent-purple)',
    skills: ['GenAI', 'LLMs', 'RAG (Retrieval-Augmented Generation)', 'AI Agents', 'Prompt Engineering']
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    icon: <Network size={20} />,
    color: 'var(--accent-blue)',
    skills: ['Django', 'Flask', 'React JS', 'Node.js', 'Bootstrap', 'TensorFlow', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib']
  },
  {
    id: 'database',
    title: 'Database Systems',
    icon: <Database size={20} />,
    color: 'var(--accent-magenta)',
    skills: ['MySQL', 'MongoDB', 'DBMS (Database Management)']
  },
  {
    id: 'core',
    title: 'Core CS',
    icon: <Cpu size={20} />,
    color: '#34d399',
    skills: ['Data Structures & Algorithms (DSA)', 'OOPs (Object Oriented Programming)', 'Computer Networks']
  },
  {
    id: 'tools',
    title: 'Tools & APIs',
    icon: <Wrench size={20} />,
    color: '#fbbf24',
    skills: ['Git', 'GitHub', 'REST API', 'FastAPI']
  }
]

function Skills() {
  const [activeTab, setActiveTab] = useState('all')

  const filteredCategories = activeTab === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeTab)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12 }
    }
  }

  return (
    <section id="skills" style={{
      padding: '5rem 0',
      background: 'rgba(6, 9, 19, 0.3)',
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
            Technical <span className="text-gradient">Skills</span>
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

        {/* Tab Filters */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
          marginBottom: '2.5rem'
        }}>
          <button 
            onClick={() => setActiveTab('all')} 
            className={`btn ${activeTab === 'all' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '0.5rem 1.25rem', borderRadius: '10px', fontSize: '0.85rem' }}
          >
            All Skills
          </button>
          {skillCategories.map(cat => (
            <button 
              key={cat.id}
              onClick={() => setActiveTab(cat.id)} 
              className={`btn ${activeTab === cat.id ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '0.5rem 1.25rem', borderRadius: '10px', fontSize: '0.85rem' }}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skill Panels Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                variants={cardVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                className="glass-panel"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  borderTop: `3px solid ${category.color}`
                }}
              >
                {/* Category Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: category.color
                }}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    padding: '8px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {category.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.15rem',
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--text-primary)',
                    fontWeight: '700'
                  }}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills Badges Wrapper */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.65rem'
                }}>
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        boxShadow: `0 0 10px ${category.color}40`,
                        borderColor: category.color
                      }}
                      style={{
                        padding: '0.4rem 0.85rem',
                        fontSize: '0.85rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '999px',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        color: 'var(--text-secondary)',
                        cursor: 'default',
                        transition: 'color 0.2s ease, border-color 0.2s ease'
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}

export default Skills
