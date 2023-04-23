import React, { useState, createContext, useContext, useMemo } from "react";
import Child from "./Child/Child";
import { IncrementContext } from "./Child/IncrementContext";
import Test from "./Child/Test";

export default function App() {
  const [state, setState] = useState(0);
  return (
    <div>
      App 
      <IncrementContext.Provider value={useMemo(() => state, [state])}>
        <Test setState={setState} />
        <Child />
      </IncrementContext.Provider>
    </div>
  );
}
