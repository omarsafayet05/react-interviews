import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [name, setName] = useState("Omar Safayet Khan");

  const changeName = () => {
    setName("Mahian");
  };

  const changeNameOne = (value) => {
    //receive value from child in function

    setName(value);
  };

  return (
    <div>
      <Child
        valueOfProps={name}
        changeName={changeName}
        changeNameOne={changeNameOne}
      />
    </div>
  );
};

export default Parent;
