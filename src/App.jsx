import uuid from 'react-uuid';
import Costs from './components/costs/Costs';
import NewCost from './components/new-costs/NewCost';

function App() {
  const COSTS = [
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

  const addCostHandler = (dataCost) => {
    const data = {
      ...dataCost,
    };
    console.log(data);
  };

  return (
    <div>
      <h1>Приложение расходов!</h1>
      <NewCost addCostHandler={addCostHandler} />
      <Costs data={COSTS} />
    </div>
  );
}

export default App;
