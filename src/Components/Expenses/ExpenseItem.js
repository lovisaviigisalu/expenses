import React, { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from "../UI/Card";

const ExpenseItem =(props) => {

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.ExpenseData.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.ExpenseData.title}</h2>
                <div className="expense-item__price">{props.ExpenseData.amount}</div>
            </div>
        </Card>



)
}


export default ExpenseItem