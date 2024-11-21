import classes from "./TodoItem.module.css";

export default function Todo({ todo }) {
  return (
    <li className={classes.todo}>
      <div>
        <p className={classes.title}>{todo.title}</p>
        <p className={classes.description}>{todo.description}</p>
      </div>
    </li>
  );
}
