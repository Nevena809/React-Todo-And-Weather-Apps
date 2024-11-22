import { useContext, useEffect } from "react";
import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";
import TodoContext from "../../store/TodoContext";

export default function TodoList() {
  const todoCtx = useContext(TodoContext);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://66d556e5f5859a704265a896.mockapi.io/api/v1/todos"
      );

      const todoData = await response.json();
      todoCtx.addAllTodos(todoData);
    }
    getData();
  }, []);

  return (
    <ul className={classes.todos}>
      {todoCtx.todos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo}></TodoItem>
      ))}
    </ul>
  );
}
