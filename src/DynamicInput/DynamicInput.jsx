import React, { useState } from "react";

const DynamicInput = () => {
  const [inputs, setInputs] = useState({});
  const getInputValues = (data) => {
    //console.log(data.target.value);
    //console.log(data.target.name);
    let { name, value } = data.target;
    console.log(value);
    let input = { [name]: value };
    setInputs({ ...inputs, ...input });
  };
  console.log(inputs);
  return (
    <div>
      <div>
        <input placeholder="Name" name="name" onChange={getInputValues} />
        <input placeholder="Age" name="age" onChange={getInputValues} />
        <input
          placeholder="Years of Experiance"
          name="yoe"
          onChange={getInputValues}
        />
      </div>
    </div>
  );
};

export default DynamicInput;
//id and name props work same to getinputValues.
// Don't need to send each input data through API(form onSubmit),those easier to send as single data(inputs).
