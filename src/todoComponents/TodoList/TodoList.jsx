import { useContext, useEffect } from "react";
import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";
import TodoContext from "../../store/TodoContext";

export default function TodoList() {
  const { todos, addAllTodos } = useContext(TodoContext);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://66d5fefbf5859a704268148c.mockapi.io/api/v1/getTodos"
      );

      const todoData = await response.json();
      console.log(todoData);

      addAllTodos(todoData);
    }
    getData();
  }, []);

  return (
    <ul className={classes.todos}>
      {todos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} id={todo.id}></TodoItem>
      ))}
    </ul>
  );
}
