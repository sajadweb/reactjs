import { useTodoState } from "../../context";
import { List } from "antd";
import Todo from "./item";


export default function TodoList() {
  const todos = useTodoState();
  return (
    <h2>
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
    </h2>
  );
}
