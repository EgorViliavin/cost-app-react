import './DiagramBar.css';

function DiagramBar(props) {
  console.log(props);
  const { value, maxValue, label } = props;
  console.log(value);
  console.log(maxValue);

  let barFillHeight = '0%';

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + '%';
  }

  console.log(barFillHeight);
  return (
    <div className='diagram-bar'>
      <div className='diagram-bar__inner'>
        <div
          className='diagram-bar__fill'
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className='diagram-bar__label'>{label}</div>
    </div>
  );
}
export default DiagramBar;
