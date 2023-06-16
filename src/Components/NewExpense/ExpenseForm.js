import React from "react";
import './ExpenseForm.css'
const ExpenseForm = (props) =>{
    return(
        <form>
            <div className={'new-expense__controls'}>
                <div className={'new-expense__control'}>
                    <label className={''}>Title</label>
                    <input className={''} type="text"/>
                </div>
                <div className={'new-expense__control'}>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01'/>
                </div>
                <div className={'new-expense__control'}>
                    <label>Date</label>
                    <input type='date' min='2023-06-16' max='2025-12-31'/>
                </div>
            </div>
            <div className={'new-expense__actions'}>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm