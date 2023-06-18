
import './App.css';
import NewExpense from "./Components/NewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";


        const DUMMY_EXPENSES = [
            {
                date: new Date(2023, 6, 15),
                title: 'New car',
                amount: 199.99
            },
            {
                date: new Date(2023, 5, 15),
                title: 'New dress',
                amount: 19.99
            },
            {
                date: new Date(2023, 7, 25),
                title: 'New skirt',
                amount: 9.99
            },
        ];
    const App = () => {
        const addExpensehandler = (expense) => {
            console.log('In App.js')
            console.log(DUMMY_EXPENSES)
        }
        return (
            <div className="App">
                <NewExpense onAddExpense={addExpensehandler}></NewExpense>
                <Expenses expenseData={DUMMY_EXPENSES}></Expenses>
            </div>
        );
    }

export default App;
