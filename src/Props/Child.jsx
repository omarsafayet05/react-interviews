import React from "react";

const Child = ({ valueOfProps, changeName, changeNameOne }) => {
  return (
    <div>
      <h1>{valueOfProps}</h1>
      <button onClick={changeName}>Change States by props</button>
      {/* parent to child  */}
      <button onClick={() => changeNameOne("Shoeb")}>
        Change States (Child to Parent);
      </button>
      {/* child to parent */}
    </div>
  );
};

export default Child;
