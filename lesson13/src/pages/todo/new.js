import { useRef } from "react";
import { useTodoDispatch } from "../../context";
import { useNavigate } from "react-router";
export default function TodoNew() {
  const navigate = useNavigate();

  const idRef = useRef("");
  const titleRef = useRef("");
  const completeRef = useRef("");
  const action = useTodoDispatch();
  const handleSubmit = async () => {
    const id = idRef.current.value;
    const title = titleRef.current.value;
    const complete = completeRef.current.checked;
    await action.handleAdd({ id, title, complete });
    navigate("/todo");
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
}
