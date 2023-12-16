import './Costdata.css';

function CostData(props) {
  const { date } = props;
  const MONTH = date.toLocaleString('ru-RU', { month: 'long' });
  const YEAR = date.getFullYear();
  const DAY = date.toLocaleString('ru-RU', { day: '2-digit' });
  return (
    <div className='cost-date'>
      <div className='cost-date__month'>{MONTH}</div>
      <div className='cost-date__year'>{YEAR}</div>
      <div className='cost-date__day'>{DAY}</div>
    </div>
  );
}

export default CostData;
