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
    const existingTodoData = [...state.todos];
    existingTodoData.push(action.todo);

    console.log(existingTodoData);

    return { ...state, todos: existingTodoData };
  }

  if (action.type === "DELETE_TODO") {
    const existingTodoIndex = state.todos.findIndex(
      (todo) => todo.id === action.id
    );

    const existingTodoData = [...state.todos];
    existingTodoData.splice(existingTodoIndex, 1);

    return { ...state, todos: existingTodoData };
  }

  if (action.type === "UPDATE_TODO") {
    // find index
    const existingTodoIndex = state.todos.findIndex(
      (todo) => todo.id === action.id
    );

    const existingTodoData = state.todos[existingTodoIndex]; // finde one todo on specific index
    const todoData = [...state.todos]; // copy all todo lists

    // update items with new data
    const updateItems = {
      ...existingTodoData,
      title: existingTodoData.title,
      description: existingTodoData.description,
    };

    todoData[existingTodoIndex] = updateItems; //overrideing existing todo with new data

    return { ...state, todos: todoData };
  }

  if (action.type === "ADD_ALL_TODO") {
    return { ...state, todos: action.todos };
  }

  return state;
}

export function TodoContextProvider({ children }) {
  const [list, dispatch] = useReducer(todoReducer, { todos: [] });

  function addTodo(todo) {
    dispatch({ type: "ADD_TODO", todo });
  }

  function deleteTodo(id) {
    dispatch({ type: "DELETE_TODO", id });
  }

  function updateTodo(id) {
    dispatch({ type: "UPDATE_TODO", id });
  }

  function addAllTodos(todos) {
    dispatch({ type: "ADD_ALL_TODO", todos });
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
