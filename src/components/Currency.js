import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const currencyOptions = [
    { value: 'option1', label: '$ Dollar', currency: 'USD' },
    { value: 'option2', label: '£ Pound', currency: 'GBP' },
    { value: 'option3', label: '€ Euro', currency: 'EUR' },
    { value: 'option4', label: '₹ Rupee', currency: 'INR' },
];

function Currency() {
  const { dispatch, selectedCurrency } = useContext(AppContext);

  const handleSelectChange = (event) => {
    const newCurrency = event.target.value;
    dispatch({
      type: 'CHG_CURRENCY',
      payload: newCurrency,
    });
  };

  const Style ={
      backgroundColor: 'green'
  }
  return (
    <div class="alert" style={Style}>
      <label htmlFor="options">Currency:</label>
            <select id="options" value={selectedCurrency} onChange={handleSelectChange}>
                {/* Renderiza las opciones de moneda */}
                {currencyOptions.map((option) => (
                    <option key={option.value} value={option.currency}>
                        {option.label}
                    </option>
                ))}
            </select>
    </div>
  );
}

export default Currency;