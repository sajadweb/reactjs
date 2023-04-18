import React, { useContext } from "react";
import { IncrementContext } from "./IncrementContext";

function Child3() {
  const counter = useContext(IncrementContext);
  return (
    <div>
      Child 3 <br /> count ={counter}
    </div>
  );
}

export default Child3;
