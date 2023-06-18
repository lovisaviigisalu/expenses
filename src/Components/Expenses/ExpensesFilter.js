import React, {useEffect, useState} from 'react';

import './ExpensesFilter.css';


const ExpensesFilter = (props) => {
    const[year, setYear] = useState(2023)
   const yearChangeHandler = (event) => {

      console.log('Year was changed to ' + event.target.value)
       setYear(event.target.value)
       };

    useEffect(() => {
        const filterData = {
            year: parseInt(year)
        };
        console.log(filterData)

     props.onChange(filterData);
    }, [props, year]);

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={yearChangeHandler}>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;