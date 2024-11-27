import { createContext, useReducer } from "react";
/* eslint-disable react/prop-types */

const TodoContext = createContext({
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
  addAllTodos: () => {},
});

function todoReducer(state, action) {
  if (action.type === "ADD_TODO") {
    const todoData = [...state.todos];
    todoData.push(action.todo);

    return { ...state, todos: todoData };
  }

  if (action.type === "DELETE_TODO") {
    const existingTodoIndex = state.todos.findIndex(
      (todo) => todo.id === action.todo.id
    );

    const todoData = [...state.todos];
    todoData.splice(existingTodoIndex, 1);

    return { ...state, todos: todoData };
  }

  if (action.type === "UPDATE_TODO") {
    const existingTodoIndex = state.todos.findIndex(
      (todo) => todo.id === action.todo.id
    );

    const todoData = [...state.todos];
    todoData[existingTodoIndex] = action.todo;

    return { ...state, todos: todoData };
  }

  if (action.type === "ADD_ALL_TODO") {
    return { ...state, todos: action.todo };
  }

  return state;
}

export function TodoContextProvider({ children }) {
  const [list, dispatch] = useReducer(todoReducer, { todos: [] });

  function addTodo(todo) {
    dispatch({ type: "ADD_TODO", todo });
  }

  function deleteTodo(todo) {
    dispatch({ type: "DELETE_TODO", todo });
  }

  function updateTodo(todo) {
    dispatch({ type: "UPDATE_TODO", todo });
  }

  function addAllTodos(todo) {
    dispatch({ type: "ADD_ALL_TODO", todo });
  }

  const todoContext = {
    todos: list.todos,
    addTodo,
    deleteTodo,
    updateTodo,
    addAllTodos,
  };

  return (
    <TodoContext.Provider value={todoContext}>{children}</TodoContext.Provider>
  );
}

export default TodoContext;

// action - predstavlja podatke koje treba da vartim u state
