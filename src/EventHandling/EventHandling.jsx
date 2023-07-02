import React, { useState } from "react";

const EventHandling = () => {
  const [num, setNums] = useState(0);
  const [number, setNumbers] = useState(0);
  const [value, setValue] = useState();
  const [name, setName] = useState("");

  const addNums = () => {
    let add = 2 + 2;
    setNums(add);
  };

  const inputField = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    setValue(event.target.value);
    setName(event.target.name);
  };

  const addNumbers = (num1, num2) => {
    setNumbers(num1 + num2);
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={addNums}>Add Numbers</button>
      <h1>{number}</h1>
      <button onClick={() => addNumbers(3, 6)}>Add Numbers</button>
      <h1>{value}</h1>
      <h1>{name}</h1>
      <input type="text" onChange={inputField} name="input" />
    </div>
  );
};

export default EventHandling;
