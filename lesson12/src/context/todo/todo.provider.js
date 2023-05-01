/* eslint-disable react-hooks/exhaustive-deps */
import React, { useReducer } from "react";
import { handleComplete, handleDelete, handleAdd, handleEdit } from "./todo.action";
import { TodoReducer } from "./todo.reducer";
import { TodoStateContext, TodoDispatchContext } from "./todo.context";
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
  {
    id: 3,
    title: "Todo 3",
    complete: false,
  },
];
export const TodoProvider = ({ children }) => {
  const [state, setState] = useReducer(TodoReducer, initialTodos || []);

  const dispatch = (type, value) => {
    console.log('call dispatch',new Date());
    debugger
    setState({ type, value });
  };

  const actions = React.useMemo(
    () => ({
      handleComplete: handleComplete({ state, dispatch }),
      handleEdit: handleEdit({ state, dispatch }),
      handleDelete: handleDelete({ state, dispatch }),
      handleAdd: handleAdd({ state, dispatch }),
    }),
    [dispatch]
  );
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={actions}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};
