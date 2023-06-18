
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState(null);

    const filterChangeHandler = (enteredFilterData) => {
        setSelectedYear(enteredFilterData.year);
    }
    const filteredExpenses = props.expenseData.filter((Expense) =>{
        return Expense.date.getFullYear()=== selectedYear
    })
    return (
        <Card className='expenses'>
            <ExpensesFilter selected ={selectedYear} onChange={filterChangeHandler}></ExpensesFilter>
            <ExpensesList filteredExpenses={filteredExpenses}></ExpensesList>

        </Card>

    )
}
export default Expenses