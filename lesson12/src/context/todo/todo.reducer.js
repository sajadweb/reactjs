import * as Types from "./todo.types";

export const TodoReducer = (todos, action) => {
  switch (action?.type) {
    case Types.COMPLETE: {
      console.log("call COMPLETE", new Date());
      debugger;
      return todos.map((todo) => {
        if (todo.id === action.value.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    }
    case Types.EDIT: {
      console.log("call EDIT", new Date());
      debugger;
      return todos.map((todo) => {
        if (todo.id === action.value.id) {
          return action.value;
        } else {
          return todo;
        }
      });
    }
    case Types.DELETE: {
      console.log("call DELETE", new Date());
      debugger;
      return todos.filter((todo) => {
        if (todo.id === action.value.id) {
          return false;
        } else {
          return todo;
        }
      });
    }
    case Types.ADD: {
      console.log("call ADD", new Date());
      debugger;
      return [...todos, action.value];
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
