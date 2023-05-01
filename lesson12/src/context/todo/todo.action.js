import * as Types from "./todo.types";

export const handleComplete =
  ({ dispatch, state }) =>
  (todo) => {
    console.log('call handleComplete',new Date());
    debugger
    //api
    dispatch(Types.COMPLETE, { id: todo.id });
  };
export const handleDelete =
  ({ dispatch, state }) =>
  (todo) => {
    console.log('call handleDelete',new Date());
    debugger
    dispatch(Types.DELETE, { id: todo.id });
  };
export const handleAdd =
  ({ dispatch, state }) =>
  (todo) => {
    console.log('call handleAdd',new Date());
    debugger
    dispatch(Types.ADD, todo);
  };
export const handleEdit =
  ({ dispatch, state }) =>
  (todo) => {
    console.log('call handleEdit',new Date());
    debugger
    dispatch(Types.EDIT, todo);
  };
