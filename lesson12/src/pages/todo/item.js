import { useNavigate } from "react-router-dom";
import { useTodoDispatch } from "../../context";

export default function Todo({ todo }) {
  const navigate = useNavigate();
  const action = useTodoDispatch();
  return (
    <div key={todo.id}>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => action.handleComplete(todo)}
        />
        {todo.id}
        {" - "}
        {todo.title}
        {"   "}
        <button onClick={() => action.handleDelete(todo)}>remove</button>
        <button onClick={() => navigate("/todo/" + todo.id)}>edit</button>
        <br />
        <br />
      </label>
    </div>
  );
}
