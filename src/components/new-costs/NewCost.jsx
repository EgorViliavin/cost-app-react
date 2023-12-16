import './NewCost.css';
import CostForm from './CostForm';

function NewCost(props) {
  const { addCostHandler } = props;
  const onCostData = (dataCost) => {
    const data = {
      ...dataCost,
      id: Math.random().toString(),
    };

    addCostHandler(data);
  };

  return (
    <div className='new-cost'>
      <CostForm onCostData={onCostData} />
    </div>
  );
}

export default NewCost;
