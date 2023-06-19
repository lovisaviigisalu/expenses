import React, {useState} from "react";
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [formEdit, setFormEdit] = useState(false);
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
        setFormEdit(false)
    }

    return(
        <div>
            <button onClick={() => setFormEdit(true)} type="Add expense">Add expense</button>
            {formEdit &&(
             <form onSubmit={submitHandler}>
                <div className={'new-expense__controls'}>
                    <div className={'new-expense__control'}>
                            <label className={''}>Title</label>
                         <input className={''} type="text" onChange={titleChangeHandler} value={enteredTitle}/>

                </div>
                <div className={'new-expense__control'}>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={enteredAmount}/>
                </div>
                <div className={'new-expense__control'}>
                    <label>Date</label>
                    <input type='date' min='2023-06-16' max='2025-12-31' onChange={dateChangeHandler} value={enteredDate}/>
                </div>
            </div>
            <div className={'new-expense__actions'}>
                <button onClick={() => setFormEdit(false)}>Cancel</button>
                <button type='submit'>Add Expense</button>

            </div>
        </form>
            )}</div>
    )
}

export default ExpenseForm