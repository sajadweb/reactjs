import { useState, useMemo } from "react";
let i = 0;
const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(
    () => expensiveCalculation(count),
    [count]
  );
  //useMemo(a,b)
  //b [params]
  //   const calculation = expensiveCalculation(count);
  //   console.log("app", i++);
  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...", i++);
  //n secound
  for (let i = 0; i < 10; i++) {
    num += 1;
  }
  return num;
};

export default App;
