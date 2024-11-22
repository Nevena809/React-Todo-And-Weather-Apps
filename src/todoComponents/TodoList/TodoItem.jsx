import { FaTrash } from "react-icons/fa";
import classes from "./TodoItem.module.css";

export default function TodoItem({ todo }) {
  return (
    <li className={classes.todo}>
      <div>
        <p className={classes.title}>{todo.title}</p>
        <p className={classes.description}>{todo.description}</p>
      </div>
      <div>
        <FaTrash className={classes.deleteButton} size={23} />
      </div>
    </li>
  );
}
