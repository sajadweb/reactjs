import { useTodoDispatch, useTodoState } from "../../context";
import { List } from "antd";
import Todo from "./item";
import { useEffect, useState } from "react";
import { getBackend } from "../../api";

export default function TodoList() {
  const [state, setState] = useState("");
  const todos = useTodoState();
  const action = useTodoDispatch();
  useEffect(() => {
    (async () => {
      await action.handleGetTodo();
      const res = await getBackend();
      setState(res);
    })();
    return () => {
      setState("");
    };
  }, [getBackend]);

  return (
    <div>
      <h2>{state}</h2>
      <List
        locale={{
          emptyText: "There's nothing to do :(",
        }}
        dataSource={todos}
        renderItem={(todo) => <Todo todo={todo} />}
        pagination={{
          position: "bottom",
          pageSize: 10,
        }}
      />
    </div>
  );
}
