import React from 'react'

export default function ExpenseSummary({proexpenses}) {
    const income = proexpenses
        .filter((e) => e.amount > 0)
        .reduce((acc, curr) => acc + Number(curr.amount), 0);
    
    const expenses = proexpenses
        .filter((e) => e.amount < 0)
        .reduce((acc, curr) => acc + Number(curr.amount), 0);
    
    const balance = income + expenses;

    return (
        <div className="expense-summary fade-in">
            <h3>Summary</h3>
            <div className="summary-item">
                <span>Income:</span>
                <span className="income">${income.toFixed(2)}</span>
            </div>
            <div className="summary-item">
                <span>Expenses:</span>
                <span className="expense">${Math.abs(expenses).toFixed(2)}</span>
            </div>
            <div className="summary-item">
                <span>Balance:</span>
                <span className={balance >= 0 ? 'income' : 'expense'}>${balance.toFixed(2)}</span>
            </div>
        </div>
    )
}
