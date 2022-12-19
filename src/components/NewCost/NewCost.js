import './NewCost.css';
import CostForm from './CostForm';
import Card from '../UI/Card.js';
import React, { useState } from 'react';

const NewCost = (props) => {
    const addCostMessage = <button onClick={addNewCost}>Добавить новый расход</button>;
    const [form, setForm] = useState(addCostMessage);

    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        };
        props.onAddCost(costData);
        setForm(addCostMessage);
    };

    function cancelForm() {
        setForm(addCostMessage);
    };

    const addCostForm = <CostForm onSaveCostData={saveCostDataHandler} onCancelClick={cancelForm} />

    function addNewCost() {
        setForm(addCostForm);
    };

    return (
        <Card className='new-cost'>
            {form}
        </Card>
    );
};

export default NewCost;