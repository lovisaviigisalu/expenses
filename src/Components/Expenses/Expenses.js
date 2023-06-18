
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import './ExpensesFilter'
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
const Expenses = (props) => {
    const[filteredYear, setFilteredYear] = useState('2023')

    console.log('Your data in Expenses file is ' + filteredYear)
return (
   <Card className='expenses'>
       <ExpensesFilter onSaveFilterData={props.expenseData}></ExpensesFilter>
    <ExpenseItem expenseData={props.expenseData[0]}></ExpenseItem>
    <ExpenseItem expenseData={props.expenseData[1]}></ExpenseItem>

   </Card>

)
}
export default Expenses