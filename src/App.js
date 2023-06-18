import React,{useState} from "react";
import './App.css';
import NewExpense from "./Components/NewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";


        const DUMMY_EXPENSES = [
            {
                id: 'e1',
                date: new Date(2023, 6, 15),
                title: 'New car',
                amount: 199.99
            },
            {
                id: 'e2',
                date: new Date(2023, 5, 15),
                title: 'New dress',
                amount: 19.99
            }
        ];
    const App = () => {
        const [expenses, setExpenses] = useState
        (DUMMY_EXPENSES)

        const addExpensehandler = (expense) => {

            setExpenses((previousExpenses) =>{
                return [expense, ...previousExpenses]
            })
            console.log('In App.js')
        }
        console.log(expenses)

        return (
            <div className="App">
                <NewExpense onAddExpense={addExpensehandler}></NewExpense>
                <Expenses expenseData={expenses}></Expenses>
            </div>
        );
    }

export default App;
