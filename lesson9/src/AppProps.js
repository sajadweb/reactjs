import React, { useState } from "react";

function Test({ state, setState }) {
  return (
    <div>
      Test 
      <br/>
      count ={state}

      <br/>
      <button onClick={() => setState((a) => a + 1)}>Submit</button>
      <br/>
      <br/>
    </div>
  );
}
function Child({ state }) {
  return (
    <div>
      Child 1
      <Child2 state={state} />
    </div>
  );
}
function Child2({ state }) {
  return (
    <div>
      Child 2
      <Child3 state={state} />
    </div>
  );
}
function Child3({ state }) {
  return <div>Child 3 <br /> count ={state}</div>;
}

export default function App() {
  const [state, setState] = useState(0);
  return (
    <div>
      App
      <Test {...{ state, setState }} />
      <Child state={state} />
    </div>
  );
}
import React, { useState, createContext, useContext } from "react";

const IncrementContext = createContext();

function Test({ setState }) {
  const state = useContext(IncrementContext);
  return (
    <div>
      Test
      <br />
      count ={state}
      <br />
      <button onClick={() => setState((a) => a + 1)}>Submit</button>
      <br />
      <br />
    </div>
  );
}
function Child() {
  return (
    <div>
      Child 1
      <Child2 />
    </div>
  );
}
function Child2() {
  return (
    <div>
      Child 2
      <Child3 />
    </div>
  );
}
function Child3() {
  const state = useContext(IncrementContext);
  return (
    <div>
      Child 3 <br /> count ={state}
    </div>
  );
}

export default function App() {
  const [state, setState] = useState(0);
  return (
    <div>
      App
      <IncrementContext.Provider value={state}>
        <Test setState={setState} />
        <Child />
      </IncrementContext.Provider>
    </div>
  );
}
