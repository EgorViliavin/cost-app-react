import './Card.css';
function Card(props) {
  const CLASSES = 'card ' + props.className;
  return <div className={CLASSES}>{props.children}</div>;
}

export default Card;
