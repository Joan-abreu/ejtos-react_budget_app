import React, { useState } from 'react';

const currencyOptions = [
  { value: 'option1', label: '$ Dollar', currency: 'USD' },
  { value: 'option2', label: '£ Pound', currency: 'GBP' },
  { value: 'option3', label: '€ Euro', currency: 'EUR' },
  { value: 'option4', label: '₹ Rupee', currency: 'INR' },
];

function Currency() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="options">Select a currency:</label>
      <select id="options" value={selectedOption} onChange={handleSelectChange}>
        {currencyOptions.map((option) => (
          <option key={option.value} value={option.value} label={`Currency (${option.label})`} />
        ))}
      </select>
    </div>
  );
}

export default Currency;