import React, { useRef } from "react";

const UncontrolledCon = () => {
  let name = React.createRef();
  let age = React.createRef();

  const submit = () => {
    console.log(name.current.value);
    console.log(age.current.value);
  };

  const inputName = (event) => {
    console.log(event.target.value);
  };
  const inputAge = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <div>
        {/* Uncontrolled Component */}
        <input type="text" placeholder="Name" ref={name} />
        <input type="text" placeholder="Age" ref={age} />
        <button onClick={submit}>Submit</button>
      </div>
      <div>
        {/* controlled Component */}
        <input type="text" placeholder="Name" onChange={inputName} />
        <input type="text" placeholder="Age" onChange={inputAge} />
      </div>
    </div>
  );
};

export default UncontrolledCon;
//We can't get updated states or component automatically if we create each referance for inputs is called Uncontrolled components. we are just getting value from the DOM.After clicking you will get value. So,don't updating data instant.
//We  get updated states or component automatically is called controlled components.
