import React, { useState } from "react";

function App() {
  const [num, setNumber] = useState(0);

  function increase() {
    return setNumber(num + 1);
  }

  function decrease() {
    return setNumber(num - 1);
  }

  return (
    <div className="container">
      <h1>{num}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
