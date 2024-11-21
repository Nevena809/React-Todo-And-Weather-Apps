import { useEffect, useState } from "react";
import Todo from "./TodoItem";
import classes from "./TodoList.module.css";

export default function TodoList() {
  const [loadedTodo, setLoadedTodo] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://66d556e5f5859a704265a896.mockapi.io/api/v1/todos"
      );

      if (!response.ok) {
      }
      const todoData = await response.json();
      setLoadedTodo(todoData);
    }
    getData();
  }, []);

  return (
    <ul className={classes.todos}>
      {loadedTodo.map((todo) => (
        <Todo key={todo.id} todo={todo}></Todo>
      ))}
    </ul>
  );
}
