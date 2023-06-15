
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "./Card";

const Expenses = (props) => {
return (
   <Card className='expenses'>
    <ExpenseItem expenseData={props.expenseData[0]}></ExpenseItem>
    <ExpenseItem expenseData={props.expenseData[1]}></ExpenseItem>
   </Card>

)
}
export default Expenses