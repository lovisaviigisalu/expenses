
import './App.css';

import Expenses from "./Components/Expenses/Expenses";

const App = () => {
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
    ];

    return (
    <div className="App">
        <Expenses expenseData={expenses}></Expenses>
    </div>
  );
}

export default App;
