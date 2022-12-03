import React, { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="app">
      <Counter
        value={count}
        increase={increaseCount}
        decrease={decreaseCount}
        reset={resetCount}
      />
    </div>
  );
}

export default App;
