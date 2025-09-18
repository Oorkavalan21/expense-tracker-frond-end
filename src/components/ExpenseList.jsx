import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ExpenseList({proexpenses, handleDelete, handleEdit}) {
  return (
    <div className="expense-list fade-in">
      <h2>Expenses</h2>
      <AnimatePresence>
        {proexpenses.map((item, index) => (
          <motion.div 
            key={item._id} 
            className="expense-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <div className="expense-info">
              <span className="expense-title">{item.title}</span>
              <span className={`expense-amount ${item.amount >= 0 ? 'positive' : 'negative'}`}>
                ${Math.abs(item.amount)}
              </span>
            </div>
            <div className="action-buttons">
              <button className="edit-btn" onClick={() => handleEdit(item)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => handleDelete(item._id)}>
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      {proexpenses.length === 0 && (
        <motion.p 
          className="no-expenses"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          No expenses added yet. Start by adding one!
        </motion.p>
      )}
    </div>
  )
}
