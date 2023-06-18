import React from "react";
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'
const ExpensesList = (props) =>{
    if(props.filteredExpenses.length === 0){
        return  <p className={'expenses-list__fallback'}>No expenses founf</p>
    }

    return (
        <ul className={'expenses-list'}>
            {
                props.filteredExpenses.map((Expenses) =>
                    {
                        return <ExpenseItem
                            id={Expenses.id}
                            title={Expenses.title}
                            amount={Expenses.amount}
                            date={Expenses.date}
                        ></ExpenseItem>
                    })
            }
        </ul>
    )

}
export default ExpensesList