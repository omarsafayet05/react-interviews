import React, { useState } from "react";

const States = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [array, setArray] = useState([
    {
      name: "Ashik",
      age: 32,
    },
    {
      name: "Mashik",
      age: 63,
    },
  ]);
  const [object, setObject] = useState({
    name: "Ashik",
    age: 32,
  });

  const increment = () => {
    setCount(count + 1);
    setName("Omar Safayet Khan");
  };
  const decrement = () => {
    setCount(count - 1);
    setIsVisible(!isVisible);
  };
  return (
    <div>
      {" "}
      <h1>{count}</h1>
      <h1>{name}</h1>
      {isVisible ? <h1>Visible</h1> : <h1>Invisible</h1>}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default States;
