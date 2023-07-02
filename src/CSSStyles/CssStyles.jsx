import React, { useState } from "react";

const styles = {
  internal: {
    color: "blue",
  },
  light: {
    color: "black",
    backgroundColor: "white",
  },

  dark: {
    color: "white",
    backgroundColor: "black",
  },
};

const CssStyles = () => {
  const [theme, setTheme] = useState(false);

  const changeMode = () => {
    setTheme(!theme);
  };

  return (
    <div style={theme ? styles.light : styles.dark}>
      {/* css style simple apply */}
      {/* <h1 className="external">External CSS</h1>
      <h1 style={styles.internal}>Internal CSS</h1>
      <h1 style={{ color: "green" }}>Inline CSS</h1> */}

      {/* css style advance apply(darkmode) */}
      <h1 className="external">External CSS</h1>
      <h1>Internal CSS</h1>
      <h1
        style={
          theme
            ? { color: "black", backgroundColor: "white" }
            : { color: "green", backgroundColor: "black" }
        }
      >
        Inline CSS
      </h1>
      <button onClick={changeMode}>Toggle</button>
    </div>
  );
};

export default CssStyles;
//There is shown different css style configuration.
