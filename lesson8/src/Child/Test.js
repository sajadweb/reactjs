import React, { useContext } from "react";

import { IncrementContext } from "./IncrementContext";

function Test({ setState }) {
  const counter = useContext(IncrementContext);
  return (
    <div>
      Test
      <br />
      count ={counter}
      <br />
      <button onClick={() => setState((a) => a + 1)}>Submit</button>
      <br />
      <br />
    </div>
  );
}
export default Test;
