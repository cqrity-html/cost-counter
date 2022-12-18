import CostItem from './CostItem.js';
import CostsFilter from './CostsFilter.js';
import Card from '../UI/Card.js';
import './Costs.css';
import React, { useState } from 'react';

function Costs(props) {
    const [selectedYear, setSelectedYear] = useState('2021');

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    };

    return (
        <Card className='costs'>
            <CostsFilter onChangeYear={yearChangeHandler} year={selectedYear} />
            <CostItem
                date={props.costs[0].date}
                description={props.costs[0].description}
                amount={props.costs[0].amount}
            />
            <CostItem
                date={props.costs[1].date}
                description={props.costs[1].description}
                amount={props.costs[1].amount}
            />
            <CostItem
                date={props.costs[2].date}
                description={props.costs[2].description}
                amount={props.costs[2].amount}
            />
        </Card>
    );
};

export default Costs;