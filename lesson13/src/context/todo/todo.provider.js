/* eslint-disable react-hooks/exhaustive-deps */
import React, { useReducer } from "react";
import { handleComplete, handleDelete, handleAdd, handleEdit, handleGetTodo } from "./todo.action";
import { TodoReducer } from "./todo.reducer";
import { TodoStateContext, TodoDispatchContext } from "./todo.context";
 
export const TodoProvider = ({ children }) => {
  const [state, setState] = useReducer(TodoReducer, []);

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
      handleGetTodo: handleGetTodo({ state, dispatch }),
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
