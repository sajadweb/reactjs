import { useReducer, useRef } from "react";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: true,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];
function reducer(state, action) {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    case "DELETE":
      return state.filter((todo) => {
        if (todo.id === action.id) {
          return false;
        } else {
          return todo;
        }
      });
    case "ADD":
      return [...state, action.todo];
    default:
      return state;
  }
}
function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };
  const handleDelete = (todo) => {
    dispatch({ type: "DELETE", id: todo.id });
  };
  const handleAdd = (todo) => {
    dispatch({ type: "ADD", todo });
  };
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.id}
            {" - "}
            {todo.title}
            {"   "}
            <button onClick={() => handleDelete(todo)}>remove</button>
            <br />
            <br />
          </label>
        </div>
      ))}
      <Form onChange={handleAdd} />
    </>
  );
}
const Form = ({ onChange }) => {
  const idRef = useRef("");
  const titleRef = useRef("");
  const completeRef = useRef("");

  const handleSubmit = () => {
    const id = idRef.current.value;
    const title = titleRef.current.value;
    const complete = completeRef.current.checked;
    onChange({ id, title, complete });
  };
  return (
    <div>
      <h1>Add TODO</h1>
      <div>
        <label htmlFor="id">Id: </label>
        <input type="text" name="id" ref={idRef} />
        <br />
        <br />
        <label htmlFor="title">title: </label>
        <input type="text" name="title" ref={titleRef} />
        <br />
        <br />

        <label htmlFor="complete">complete: </label>
        <input type="checkbox" name="complete" ref={completeRef} />
        <br />
        <br />

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};
const reducerIncrement = (p) => !p;
function Increment() {
  const counter = useRef(0);
  const [, render] = useReducer(reducerIncrement, false);

  function add() {
    // Some 3rd party ref
    counter.current += 1;
    // Render and update the UI
    render();
  }
  console.log("Increment", counter?.current);
  return (
    <div>
      <div>{counter.current}</div>
      <button onClick={() => add()}>Add</button>
    </div>
  );
}
function App() {
  return (
    <>
      <h1>Todos</h1>
      <Todos />
      <h1>Increment</h1>
      <Increment />
    </>
  );
}
export default App;
