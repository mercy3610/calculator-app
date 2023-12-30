import React, { useState } from 'react';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const calculatedResult = eval(displayValue);
        setResult(calculatedResult);
        setDisplayValue(calculatedResult);
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setDisplayValue('');
      setResult('');
    } else {
      setDisplayValue((prevValue) => prevValue + value);
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={displayValue} readOnly />
      <div className="buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('C')}>C</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('=')}>=</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
      {result && <div className="result">Result: {result}</div>}
    </div>
  );
};

export default Calculator;
