import CostItem from './CostItem.js';
import CostsFilter from './CostsFilter.js';
import Card from '../UI/Card.js';
import './Costs.css';
import React, { useState } from 'react';

function Costs(props) {
    const [selectedYear, setSelectedYear] = useState('2019');

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    };

    const filteredCosts = props.costs.filter(cost => cost.date.getFullYear() === +selectedYear);

    return (
        <Card className='costs'>
            <CostsFilter onChangeYear={yearChangeHandler} year={selectedYear} />
            {filteredCosts.map(cost =>
                <CostItem
                    key={cost.id}
                    date={cost.date}
                    description={cost.description}
                    amount={cost.amount}
                />)}
        </Card>
    );
};

export default Costs;