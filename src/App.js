
import './App.css';
import './Components/ExpenseItem';
import ExpenseItem from "./Components/ExpenseItem";

function App() {
    const expenses = [
    {
            date : new Date(2023, 6, 15),
            title:'New car',
            price: 199.99
    },
    {
            date : new Date(2023, 5, 15),
            title:'New dress',
            price: 19.99
    },
    ]

    return (
    <div className="App">
      <ExpenseItem expenseData={expenses[0]}></ExpenseItem>
        <ExpenseItem expenseData={expenses[1]}></ExpenseItem>
    </div>
  );
}

export default App;
