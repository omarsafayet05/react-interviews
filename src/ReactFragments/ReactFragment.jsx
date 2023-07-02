import React from "react";

const ReactFragment = () => {
  return (
    <>
      <>
        <h1>Fragments & Adjacent JSX elements</h1>
        <h1>Hello</h1>
        <h1>World</h1>
      </>
      <>
        <h1> Adjacent JSX elements</h1>
        <h1>Hello</h1>
        <h1>World</h1>
      </>
    </>
  );
};

export default ReactFragment;
//<React.Fragment></React.Fragment> or <> </>.
// double fragments keep in a fragment called Adjacent JSX.
//Can't use classname in fragments,only can use in div.
