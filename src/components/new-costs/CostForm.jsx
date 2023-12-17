import { useState } from 'react';
import './CostForm.css';

function CostForm(props) {
  const { onCostData } = props;
  const [inputName, setInputName] = useState('');
  const [inputPrice, setInputPrice] = useState('');
  const [inputDate, setInputDate] = useState('');

  // Создание одного хука для всех инпутов
  // const [formImput, setFormInput] = useState({
  //   name: '',
  //   price: '',
  //   date: '',
  // });

  const nameChangeHandler = (evt) => {
    //Второй подход для использования одно хука useState на все инпуты
    // setFormInput((prevState) => {
    //   return {
    //     ...prevState,
    //     name: evt.target.value,
    //   };
    // });
    setInputName(evt.target.value);
  };

  const priceChangeHandler = (evt) => {
    setInputPrice(evt.target.value);
  };
  const dateChangeHandler = (evt) => {
    setInputDate(evt.target.value);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();

    const costData = {
      des: inputName,
      price: inputPrice,
      date: new Date(inputDate),
    };

    onCostData(costData);
    setInputName('');
    setInputPrice('');
    setInputDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-cost__controls'>
        <div className='new-cost__control'>
          <label>Название</label>
          <input
            type='text'
            onChange={nameChangeHandler}
            minLength={3}
            maxLength={`90`}
            value={inputName}
          />
        </div>
        <div className='new-cost__control'>
          <label>Сумма</label>
          <input
            type='number'
            min={`0.01`}
            step={`0.01`}
            value={inputPrice}
            onChange={priceChangeHandler}
          />
        </div>
        <div className='new-cost__control'>
          <label>Дата</label>
          <input
            type='date'
            min={`2023-01-01`}
            max={`2024-12-31`}
            value={inputDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className='new-cost__actions'>
          <button type='submit'>Добавить расходы</button>
        </div>
      </div>
    </form>
  );
}

export default CostForm;
