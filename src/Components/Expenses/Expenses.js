
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpenseItem from "./ExpenseItem";
const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState(null);

    const filterChangeHandler = (enteredFilterData) => {
        setSelectedYear(enteredFilterData.year);
    }
    const filteredExpenses = props.expenseData.filter((Expense) =>{
        return Expense.date.getFullYear()=== selectedYear
    })
    let expensesContent = <p>No expenses founf</p>
    if(filteredExpenses.length>0){
        expensesContent =filteredExpenses.map((Expenses) => {
            return <ExpenseItem
                id={Expenses.id}
                title={Expenses.title}
                amount={Expenses.amount}
                date={Expenses.date}
            ></ExpenseItem>
        })
    }
    return (
        <Card className='expenses'>
            <ExpensesFilter selected ={selectedYear} onChange={filterChangeHandler}></ExpensesFilter>
            {expensesContent}

        </Card>

    )
}
export default Expenses