
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import './ExpensesFilter'
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
const Expenses = (props) => {
    const[filteredYear, setFilteredYear] = useState('2023')
    console.log('Your data in Expenses file is ' + filteredYear);

    const filterChangeHandler = (year) => {
        console.log('Filter Change done by Expenses.js')
        console.log(year + ' in Expenses.js')
        setFilteredYear(year)
    }
return (
   <Card className='expenses'>
       <ExpensesFilter onSaveFilterData={props.expenseData}></ExpensesFilter>
       {
           props.expenseData.map((expense) => {
               return <ExpenseItem
               id={expense.id}
               title={expense.title}
               amount={expense.amount}
               date={expense.date}
               ></ExpenseItem>
               })
       }


   </Card>

)
}
export default Expenses