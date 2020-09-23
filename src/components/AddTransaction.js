import React, {useState} from 'react'

export const AddTransaction = () => {
  const [text,setText] = useState('')
  const[amount, setAmount] = useState('')
  return (
    <>
      <h3>Add new transaction</h3>
      <form >
        <div className="form-control">
          <label htmlfor="text">Text</label>
          <input type="text"  placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlfor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number"placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}