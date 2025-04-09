import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else if (value === 'Clear') {
      setInput('');
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    ['Clear', '/', '*'],
    ['7', '8', '9', '-'],
    ['4', '5', '6', '+'],
    ['1', '2', '3'],
    ['0', '00', '.', '=']
  ];

  return (
    <div className="w-64 p-4 bg-white rounded-3xl shadow-lg mx-auto mt-10">
      <div className="mb-4 text-right text-xl p-4 bg-gray-100 rounded">{input || '0'}</div>
      <div className="grid grid-cols-4 gap-2">
        {buttons.flat().map((btn, i) => (
          <button
            key={i}
            className={`py-3 rounded text-white font-bold text-lg shadow ${
              btn === 'Clear'
                ? 'bg-red-500 col-span-2'
                : btn === '='
                ? 'bg-blue-500'
                : btn === '+'
                ? 'bg-green-500 row-span-2'
                : 'bg-gray-300 text-black'
            }`}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}


export default Calculator;