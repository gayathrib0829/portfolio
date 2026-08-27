import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact']
      const scrollPosition = window.scrollY + 300

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Background Grid Pattern */}
      <div className="grid-bg no-print"></div>

      {/* Main Web Portfolio View */}
      <div className="no-print">
        <Navbar activeSection={activeSection} />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>

        <footer style={{
          textAlign: 'center',
          padding: '3rem 0',
          color: 'var(--text-muted)',
          fontSize: '0.9rem',
          borderTop: '1px solid var(--card-border)',
          marginTop: '4rem',
          background: 'var(--footer-bg)'
        }}>
          <p>© {new Date().getFullYear()} Gayathri B. Designed & Built with ❤️ using React & Framer Motion.</p>
        </footer>
      </div>

      {/* Print-Only / PDF Generation Resume Section */}
      <div id="resume-print-section" className="print-only" style={{ display: 'none' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h1 style={{ margin: '0 0 5px 0', fontSize: '28px', color: '#000' }}>Gayathri B</h1>
          <div className="print-contact-info" style={{ fontSize: '12px', color: '#333' }}>
            <span>gayathrib0829@gmail.com</span> | 
            <span> +91 9942263139</span> | 
            <span> github.com/gayathrib0829</span> | 
            <span> linkedin.com/in/gayathri-b</span>
          </div>
        </div>

        <h2 style={{ fontSize: '18px', borderBottom: '1px solid #222', paddingBottom: '3px', marginTop: '20px' }}>Summary</h2>
        <p style={{ fontSize: '13px', lineHeight: '1.5', margin: '8px 0' }}>
          Computer Science undergraduate with experience in Python and C++, with a strong foundation in Data Structures and Algorithms, Machine Learning, AI automation, and RAG. Built AI/ML projects involving predictive modeling, with an interest in developing scalable software and AI solutions.
        </p>

        <h2 style={{ fontSize: '18px', borderBottom: '1px solid #222', paddingBottom: '3px', marginTop: '20px' }}>Projects</h2>
        
        <div style={{ marginBottom: '15px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h3 style={{ fontSize: '14px', margin: '5px 0 2px 0' }}>Website RAG Evaluator</h3>
            <span style={{ fontSize: '12px', fontStyle: 'italic' }}>Python, FastAPI, React, ChromaDB, OpenAI</span>
          </div>
          <p style={{ fontSize: '12px', margin: '3px 0' }}>
            Built a full-stack Retrieval-Augmented Generation (RAG) system that extracts and chunks website content, generates embeddings, and performs semantic vector retrieval to provide context-grounded LLM responses. Developed a RAG evaluation pipeline to measure retrieval relevance, answer correctness, and citation validity.
          </p>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h3 style={{ fontSize: '14px', margin: '5px 0 2px 0' }}>Explainable ML for Academic Performance Prediction</h3>
            <span style={{ fontSize: '12px', fontStyle: 'italic' }}>Python, Scikit-learn</span>
          </div>
          <p style={{ fontSize: '12px', margin: '3px 0' }}>
            Reimplemented a research-based ML framework for academic performance prediction using regression and ensemble models, including a weighted voting ensemble, with SHAP and LIME for model interpretability and feature analysis.
          </p>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h3 style={{ fontSize: '14px', margin: '5px 0 2px 0' }}>PyShop – Django E-commerce</h3>
            <span style={{ fontSize: '12px', fontStyle: 'italic' }}>Python, Django, SQLite, Bootstrap</span>
          </div>
          <p style={{ fontSize: '12px', margin: '3px 0' }}>
            Developed a responsive e-commerce web application with product management, session-based shopping cart, quantity updates, automated pricing, and checkout/order summary using Django and Bootstrap.
          </p>
        </div>

        <h2 style={{ fontSize: '18px', borderBottom: '1px solid #222', paddingBottom: '3px', marginTop: '20px' }}>Education</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', marginTop: '5px' }}>
          <tbody>
            <tr>
              <td style={{ padding: '4px 0', fontWeight: 'bold' }}>2025 - Present</td>
              <td style={{ padding: '4px 0' }}>Master of Computer Applications at SASTRA Deemed University</td>
              <td style={{ padding: '4px 0', textAlign: 'right' }}>Ongoing</td>
            </tr>
            <tr>
              <td style={{ padding: '4px 0', fontWeight: 'bold' }}>2022 - 2025</td>
              <td style={{ padding: '4px 0' }}>Bachelor of Computer Applications at Holy Cross College</td>
              <td style={{ padding: '4px 0', textAlign: 'right' }}>GPA: 7.1</td>
            </tr>
            <tr>
              <td style={{ padding: '4px 0', fontWeight: 'bold' }}>2021 - 2022</td>
              <td style={{ padding: '4px 0' }}>HSC (XII) at St.Joseph Higher Secondary School</td>
              <td style={{ padding: '4px 0', textAlign: 'right' }}>81%</td>
            </tr>
            <tr>
              <td style={{ padding: '4px 0', fontWeight: 'bold' }}>2019 - 2020</td>
              <td style={{ padding: '4px 0' }}>SSLC (X) at St.Joseph Higher Secondary School</td>
              <td style={{ padding: '4px 0', textAlign: 'right' }}>76%</td>
            </tr>
          </tbody>
        </table>

        <h2 style={{ fontSize: '18px', borderBottom: '1px solid #222', paddingBottom: '3px', marginTop: '20px' }}>Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '12px', marginTop: '5px' }}>
          <div><strong>Languages:</strong> Python, C++, JavaScript, Go</div>
          <div><strong>AI & RAG:</strong> GenAI, LLMs, RAG, AI Agents, Prompt Engineering</div>
          <div><strong>Frameworks:</strong> Django, Flask, React Js, Node js, Bootstrap, TensorFlow</div>
          <div><strong>Libraries:</strong> Pandas, NumPy, Scikit-learn, Matplotlib</div>
          <div><strong>Database:</strong> MySQL, MongoDB</div>
          <div><strong>Core CS:</strong> DSA, OOPs, DBMS, Computer Networks</div>
          <div><strong>Tools:</strong> Git, Github, Rest API, Fast API</div>
          <div><strong>Soft Skills:</strong> Communication, Problem-Solving, Decision Making</div>
        </div>

        <h2 style={{ fontSize: '18px', borderBottom: '1px solid #222', paddingBottom: '3px', marginTop: '20px' }}>Certifications</h2>
        <ul style={{ fontSize: '12px', margin: '5px 0', paddingLeft: '20px' }}>
          <li>Meta - Introduction to Front-End Development Coursera (2023)</li>
          <li>The Complete Full-Stack Web Development Udemy (2025)</li>
          <li>Accenture - Data Analytics and Visualization Job Simulation Forage (2024)</li>
          <li>AI Agents Course Hugging Face (2026)</li>
          <li>Introduction to Machine Learning Kaggle (2026)</li>
        </ul>
      </div>
    </>
  )
}

export default App
