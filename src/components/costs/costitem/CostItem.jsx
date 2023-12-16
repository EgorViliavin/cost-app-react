import './Costitem.css';
import Card from '../../UI/card/Card.jsx';
import CostData from './components/CostData.jsx';

function CostItem(props) {
  const { date, des, price } = props;

  return (
    <Card className='cost-item'>
      <CostData date={date} />
      <div className='cost-item__description'>
        <h2>{des}</h2>
        <div className='cost-item__price'>${price}</div>
      </div>
    </Card>
  );
}

export default CostItem;
