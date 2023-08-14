import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((previous) => {
      //useState with previous state
      return previous + 1;
    });
  };
  return (
    <div>
      <h3>Counter Example with state</h3>
      <div>
        <span>{count}</span>
      </div>
      <div>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};
