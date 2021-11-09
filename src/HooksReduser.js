import React, { useReducer } from "react";

var reducer = (state, action) => {
  if (action.type === "inc") {
    return { count: state.count + 1, bol: state.bol };
  } else if (action.type === "toggle") {
    return { count: state.count, bol: !state.bol };
  } else if (action.type === "TI") {
    return { count: state.count + 1, bol: !state.bol };
  } else {
    return state;
  }
};

// UseReduser HOOk
function HooksReduser() {
  var [state, dispatch] = useReducer(reducer, { count: 0, bol: false });

  function inc() {
    dispatch({ type: "inc" });
  }
  function toggle() {
    dispatch({ type: "toggle" });
  }

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={inc}>inc</button>
      <button onClick={toggle}>toggle</button>

      {state.bol && <h1>this is truthy condition </h1>}
    </div>
  );
}

export default HooksReduser;
