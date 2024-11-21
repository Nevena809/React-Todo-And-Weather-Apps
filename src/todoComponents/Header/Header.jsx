import { MdPostAdd, MdMessage } from "react-icons/md";
import classes from "./Header.module.css";

export default function Header({ showModal }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        Todo App
      </h1>
      <p>
        <button onClick={showModal} className={classes.button}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}
