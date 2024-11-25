import { FaTrash } from "react-icons/fa";
import classes from "./TodoItem.module.css";
import { useContext } from "react";
import TodoContext from "../../store/TodoContext";

export default function TodoItem({ todo, id }) {
  const todoCtx = useContext(TodoContext);

  async function handleDelete() {
    console.log(id);

    await fetch(
      `https://66d5fefbf5859a704268148c.mockapi.io/api/v1/getTodos/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    todoCtx.deleteTodo(id);
  }
  return (
    <li className={classes.todo}>
      <div>
        <p className={classes.title}>{todo.title}</p>
        <p className={classes.description}>{todo.description}</p>
      </div>
      <button onClick={handleDelete} className={classes.deleteButtonContainer}>
        <FaTrash className={classes.deleteButton} size={23} />
      </button>
    </li>
  );
}
