import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.div 
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>About Expense Tracker</h2>
      <div className="about-content glass-card">
        <section className="about-section">
          <h3>Our Mission</h3>
          <p>We aim to help you manage your finances effectively with a simple, intuitive expense tracking solution.</p>
        </section>
        
        <section className="about-section">
          <h3>Key Features</h3>
          <ul className="feature-list">
            <li>Track income and expenses easily</li>
            <li>Real-time balance updates</li>
            <li>Beautiful visual interface</li>
            <li>Edit and delete transactions</li>
            <li>Mobile responsive design</li>
          </ul>
        </section>

        <section className="about-section">
          <h3>How It Works</h3>
          <p>Simply add your income and expenses, and let our app handle the calculations. 
             View your financial summary at a glance and make informed decisions about your spending.</p>
        </section>
      </div>
    </motion.div>
  )
}
