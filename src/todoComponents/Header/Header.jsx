import { MdPostAdd, MdMessage } from "react-icons/md";
import classes from "./Header.module.css";
import { useContext } from "react";
import TypeContext from "../../store/TypeContext";

export default function Header() {
  const typeCtx = useContext(TypeContext);

  function handleShowModal() {
    typeCtx.showModal("newTodo");
  }
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        Todo App
      </h1>
      <p>
        <button onClick={handleShowModal} className={classes.button}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}
