import DiagramBar from './DiagramBar';
import './Diagram.css';
function Diagram(props) {
  const { costs } = props;

  const costsPriceArray = costs.map((item) => {
    return item.value;
  });

  const maxMonthCosts = Math.max(...costsPriceArray);

  return (
    <div className='diagram'>
      {costs.map((item) => (
        <DiagramBar
          value={item.value}
          maxValue={maxMonthCosts}
          label={item.label}
          key={item.label}
        />
      ))}
    </div>
  );
}

export default Diagram;
