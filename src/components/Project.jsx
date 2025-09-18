import React from 'react'
import ExpenseTrack from './ExpenseTrack'
import { motion } from 'framer-motion'

export default function Project() {
  return (
    <motion.div 
      className="project-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ExpenseTrack />
    </motion.div>
  )
}
