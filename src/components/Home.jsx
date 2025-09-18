import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <motion.div 
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero-section">
        <motion.h1 
          className="home-title"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Smart Expense Tracker
        </motion.h1>
        <motion.p 
          className="home-subtitle"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Take control of your finances with our intuitive expense tracking solution
        </motion.p>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/project" className="cta-button">Get Started</Link>
        </motion.div>
      </div>

      <motion.div 
        className="features-grid"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="feature-card">
          <span className="feature-icon">💰</span>
          <h3>Track Expenses</h3>
          <p>Keep track of your daily expenses and income with ease</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">📊</span>
          <h3>Smart Analytics</h3>
          <p>View your spending patterns and balance in real-time</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">⚡</span>
          <h3>Easy Management</h3>
          <p>Add, edit, and delete transactions with simple clicks</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
