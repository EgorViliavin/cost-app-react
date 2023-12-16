import { useState } from 'react';
import './Costs.css';
import CostItem from './costitem/Costitem';
import Card from '../UI/card/Card';
import CostsFilter from '../cost-filter/CostFilter';

function Costs(props) {
  const { data } = props;

  const [selectedYears, setSelectedYears] = useState('2023');

  const onChangeYear = (dataYears) => {
    setSelectedYears(dataYears);
  };
  return (
    <div>
      <Card className='costs'>
        <CostsFilter onChangeYear={onChangeYear} year={selectedYears} />
        <div className=''>
          {data.map((item) => {
            return (
              <CostItem
                date={item.date}
                des={item.des}
                price={item.price}
                key={item.id}
              />
            );
          })}
        </div>
      </Card>
    </div>
  );
}

export default Costs;
