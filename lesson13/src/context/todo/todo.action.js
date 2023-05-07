import {
  addTodo,
  completeTodo,
  deleteTodo,
  editTodo,
  getTodo,
} from "../../api";
import * as Types from "./todo.types";

export const handleGetTodo =
  ({ dispatch, state }) =>
  async () => {
    const list = await getTodo();
    dispatch(Types.INIT_DATA, list);
  };
export const handleComplete =
  ({ dispatch, state }) =>
  async (todo) => {
    console.log("call handleComplete", new Date());
    debugger;
    const todoApi = await completeTodo(todo);
    console.log("todoApi", todoApi);
    dispatch(Types.COMPLETE, { id: todo.id });
  };
export const handleDelete =
  ({ dispatch, state }) =>
  async (todo) => {
    console.log("call handleDelete", new Date());
    debugger;
    const todoApi = await deleteTodo(todo);
    console.log("todoApi", todoApi);
    dispatch(Types.DELETE, { id: todo.id });
  };
export const handleAdd =
  ({ dispatch, state }) =>
  async (todo) => {
    console.log("call handleAdd", new Date());
    debugger;
    const todoApi = await addTodo(todo);
    console.log("todoApi", todoApi);
    dispatch(Types.ADD, todo);
  };
export const handleEdit =
  ({ dispatch, state }) =>
  async (todo) => {
    console.log("call handleEdit", new Date());
    const todoApi = await editTodo(todo);
    console.log("todoApi", todoApi);
    dispatch(Types.EDIT, todo);
  };
