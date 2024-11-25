import { createContext, useState } from "react";
/* eslint-disable react/prop-types */

const TypeContext = createContext({
  type: "",
  showNewTodo: () => {},
  hideNewTodo: () => {},
  showUpdate: () => {},
  hideUpdate: () => {},
});

export function TypeContextProvider({ children }) {
  const [todoType, setTodoType] = useState("");

  function showNewTodo() {
    setTodoType("show-new");
  }

  function hideNewTodo() {
    setTodoType("");
  }

  function showUpdate() {
    setTodoType("show-update");
  }

  function hideUpdate() {
    setTodoType("");
  }

  const typeCtx = {
    type: todoType,
    showNewTodo,
    hideNewTodo,
    showUpdate,
    hideUpdate,
  };

  return (
    <TypeContext.Provider value={typeCtx}>{children}</TypeContext.Provider>
  );
}

export default TypeContext;
