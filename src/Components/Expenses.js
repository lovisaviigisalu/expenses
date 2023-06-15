import ExpenseDate from "./ExpenseDate";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

const Expenses = (props) => {
return (
   <div className={'expenses'}>
    <ExpenseItem expenseData={props.expenseData[0]}></ExpenseItem>
    <ExpenseItem expenseData={props.expenseData[1]}></ExpenseItem>
   </div>

)
}
export default Expenses