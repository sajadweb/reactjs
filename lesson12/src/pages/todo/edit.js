import { useRef, useState } from "react";
import { useTodoDispatch, useTodoState } from "../../context";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback } from "react";
import { useEffect } from "react";
const useForm = () => {
  const [form, setForm] = useState({});
  const onChange = useCallback(
    (key) => {
      return (value) => {
        if (key === "init") {
          return setForm(value);
        }
        debugger;
        setForm({
          ...form,
          [key]: value,
        });
      };
    },
    [setForm]
  );
  return [form, onChange];
};
export default function TodoEdit() {
  const navigate = useNavigate();
  const todos = useTodoState();
  const { id } = useParams();
  const action = useTodoDispatch();
  const [form, setForm] = useState({});
  useEffect(() => {
    if (todos && id) {
      const t = todos?.find((todo) => {
        return `${todo.id}` === `${id}`;
      });
      setForm(t);
    }
    return () => {};
  }, [todos, id]);

  const handleSubmit = () => {
    debugger;
    action.handleEdit(form);
    navigate("/todo");
  };
  return (
    <div>
      <h1>Edit TODO</h1>
      <div>
        <label htmlFor="id">Id: </label>
        <input
          type="text"
          name="id"
          value={form?.id}
          onChange={(e) => setForm({ ...form, id: e.target.value })}
        />
        <br />
        <br />
        <label htmlFor="title">title: </label>
        <input
          type="text"
          name="title"
          value={form?.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <br />
        <br />

        <label htmlFor="complete">complete: </label>
        <input
          type="checkbox"
          name="complete"
          checked={form?.complete}
          onChange={(e) => {
            debugger;
            setForm({ ...form, complete: e.target.checked }) 
          }}
        />
        <br />
        <br />

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
