import CostsFilter from './CostsFilter.js';
import Card from '../UI/Card.js';
import './Costs.css';
import React, { useState } from 'react';
import CostList from './CostList.js';
import CostsDiagram from './CostsDiagram.js';

function Costs(props) {
    const [selectedYear, setSelectedYear] = useState('2022');

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    };

    const filteredCosts = props.costs.filter(cost => cost.date.getFullYear() === +selectedYear);

    return (
        <Card className='costs'>
            <CostsFilter onChangeYear={yearChangeHandler} year={selectedYear} />
            <CostsDiagram costs={filteredCosts} />
            <CostList costs={filteredCosts} />
        </Card>
    );
};

export default Costs;