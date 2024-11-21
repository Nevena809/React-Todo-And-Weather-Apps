import { createContext, useReducer } from "react";

const TodoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (id) => {},
});

function todoReducer(state, action) {
  if (action.type === "ADD_TODO") {
    const existingTodoData = [...state.todos];
    existingTodoData.push(action.todo);

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

  return state;
}

export function TodoContextProvider({ children }) {
  const [list, dispatch] = useReducer(todoReducer, { todos: [] });

  const todoContext = {
    todos: list.todos,
  };

  function addTodo(todo) {
    dispatch({});
  }

  function deleteTodo(id) {
    dispatch({});
  }
  return (
    <TodoContext.Provider value={todoContext}>{children}</TodoContext.Provider>
  );
}

export default TodoContext;
