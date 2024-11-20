import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    setCounter(counter + 1);
  }

  function handleDecrement() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1>Counter:</h1>
      {/* data-testid - keyword from react to identify the element in testing */}
      <p data-testid="counter">{counter}</p>
      <div>
        <button onClick={handleIncrement}>
          +
        </button>
        <button data-testid="decrement" onClick={handleDecrement}>
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
