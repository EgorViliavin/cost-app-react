import { useState } from 'react';
import './Costs.css';
import CostItem from './costitem/Costitem';
import Card from '../UI/card/Card';
import CostsFilter from '../cost-filter/CostFilter';
import CostDiagram from '../diagrams/CostDiagram';

function Costs(props) {
  const { data } = props;

  const [selectedYear, setSelectedYears] = useState('2021');

  const onChangeYear = (dataYears) => {
    setSelectedYears(dataYears);
  };

  const dataFilter = data.filter((date) => {
    return date.date.getFullYear().toString() === selectedYear;
  });

  let costContent = <p className='cost__zero'>В этом году расходов нет</p>;

  if (dataFilter.length > 0) {
    costContent = dataFilter.map((item) => {
      return (
        <CostItem
          date={item.date}
          des={item.des}
          price={item.price}
          key={item.id}
        />
      );
    });
  }

  return (
    <div>
      <Card className='costs'>
        <CostDiagram costs={dataFilter} />
        <CostsFilter onChangeYear={onChangeYear} year={selectedYear} />
        <div className=''>{costContent}</div>
      </Card>
    </div>
  );
}

export default Costs;
