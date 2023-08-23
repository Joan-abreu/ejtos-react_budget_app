import React, { useState, useContext, useRef  } from 'react';
import { AppContext } from '../context/AppContext';

function Budget() {
  const [budget, setBudget] = useState(2000);
  const { remaining } = useContext(AppContext);
  const prevValueRef = useRef(budget);

  const handleInputChange = (event) => {
    
    const newValue = Number(event.target.value);
    
    if (newValue > 20000) {
      alert('Value should not exceed 20000');
    } 
    else if (newValue < remaining) {
        alert("Value should not exceed remaining funds £ " + remaining);
    }
    else if (newValue > prevValueRef.current) {
        let increase = newValue + 9
        setBudget(increase);
        prevValueRef.current = increase
    } 
    else if (newValue < prevValueRef.current) {
        let decrease = newValue - 9
        setBudget(decrease);
        prevValueRef.current = decrease
    }
    else {
        setBudget(newValue);
    }
  };



  return (
    <div className='alert alert-secondary'>
      <label htmlFor="budget">Budget: £</label>
      <input
        required
        type="number"
        id="budget"
        value={budget}
        max={20000}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Budget;
