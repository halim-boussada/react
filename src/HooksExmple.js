import React, { useState } from "react";

// UseState HOOk
function Hooks() {
  var [count, setCount] = useState(0);
  var [bol, setBol] = useState(false);

  function inc() {
    setCount(count + 1);
    setBol(!bol);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>inc</button>
      {bol && <h1>this is truthy condition </h1>}
    </div>
  );
}

export default Hooks;
