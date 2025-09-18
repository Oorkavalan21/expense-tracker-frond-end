import React, { useEffect, useState } from "react";

export default function ExpenseForm({ addExpense,itemToEdit}) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  useEffect (() => {
    if (itemToEdit) {
      setTitle(itemToEdit.title);
      setAmount(itemToEdit.amount.toString());
    }else {
      setTitle("");
      setAmount("");
    }
  }, [itemToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;
    addExpense(title, amount,itemToEdit?._id); // now works fine
    setTitle(""); // clear after submit
    setAmount("");
  };

  return (
    <div className="expense-form fade-in">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter a Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            placeholder="Enter an Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button className="submit-btn">
          <b>SUBMIT</b>
        </button>
      </form>
    </div>
  );
}
