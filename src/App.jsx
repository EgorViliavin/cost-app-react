import uuid from 'react-uuid';
import { useState } from 'react';
import Costs from './components/costs/Costs';
import NewCost from './components/new-costs/NewCost';
const INITIAL_COSTS = [
  {
    date: new Date(2021, 10, 10),
    des: 'Холодильник',
    price: '999.99',
    id: uuid(),
  },
  {
    date: new Date(2022, 6, 10),
    des: 'Сотовый телефон',
    price: '300',
    id: uuid(),
  },
  {
    date: new Date(2023, 11, 12),
    des: 'Телевизор',
    price: '1000',
    id: uuid(),
  },
];

function App() {
  const [costs, setCost] = useState(INITIAL_COSTS);

  const addCostHandler = (dataCost) => {
    setCost((prevState) => {
      return [dataCost, ...prevState];
    });
  };

  return (
    <div>
      <h1>Приложение расходов!</h1>
      <NewCost addCostHandler={addCostHandler} />
      <Costs data={costs} />
    </div>
  );
}

export default App;
