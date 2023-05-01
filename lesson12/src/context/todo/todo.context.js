import { useContext, createContext } from "react";

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

/**
 * Todo State Managment
 * @returns state
 */
export const useTodoState = () => {
  const context = useContext(TodoStateContext);
  if (context === undefined) {
    throw new Error("useTodoState must be used within a TodoProvider");
  }
  return context;
};

/**
 * Todo Action Managment
 * @returns Actions
 */
export const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);
  if (context === undefined) {
    throw new Error("useTodoDispatch must be used within a TodoProvider");
  }
  return context;
};
