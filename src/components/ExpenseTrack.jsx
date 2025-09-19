import React, { useEffect, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import { v4 as uid } from "uuid"; //npm i uuid(installation the uuid)
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";
import axios from "axios";
const EXPENSES = [
  // { id: uid(), title: "Expenses 1", amount: 100 },
  // { id: uid(), title: "Expenses 2", amount: -200 },
];

export default function ExpenseTrack() {
  const [expenses, setExpenses] = useState(EXPENSES);
  const [itemToEdit, setItemToEdit] = useState(null);
  useEffect(() => {
    axios.get('https://expense-tracker-back-end-vznw.onrender.com/api/')
    .then((response) => {
      setExpenses(response.data) })
    .catch((error) => {console.error("Unable to Fetch");
    })
  },[])

  useEffect(() => {

  },[])

  const addExpense = (title, amount,id) => {
    if (id) {
      axios.put(`https://expense-tracker-back-end-vznw.onrender.com/api/${id}`, { title, amount: Number(amount) })
        .then((res) => {
          const updatedList = expenses.map((exp) =>
            exp._id === id ? res.data : exp
          );
          setExpenses(updatedList);
          setItemToEdit(null);
        })
        .catch((err) => console.error("Update error:", err));
    } else {
      // Add new expense
    axios.post("https://expense-tracker-back-end-vznw.onrender.com/api/postdata",
      {title,amount:Number(amount)})
      .then((res)=> setExpenses([...expenses,res.data]))
      .catch((error)=>console.error("Add Error:",error));
    }
  };

  const handleDelete = (id) => {
    axios.delete(`https://expense-tracker-back-end-vznw.onrender.com/api/${id}`)
    .then(() => { setExpenses(expenses.filter((exp) => exp._id !== id)) } )
    .catch((Error) => { console.error({ Error: Error.message }) })
  };

  const handleEdit = (item) => {
    setItemToEdit(item);
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <ExpenseForm addExpense={addExpense} itemToEdit={itemToEdit} />
      <ExpenseList 
        proexpenses={expenses} 
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <ExpenseSummary proexpenses={expenses} />
    </div>
  );
}
