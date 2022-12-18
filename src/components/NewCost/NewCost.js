import './NewCost.css';
import CostForm from './CostForm';
import Card from '../UI/Card.js';

const NewCost = (props) => {
    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        };
        props.onAddCost(costData);
    };
    return (
        <Card className='new-cost'>
            <CostForm onSaveCostData={saveCostDataHandler} />
        </Card>
    );
};

export default NewCost;