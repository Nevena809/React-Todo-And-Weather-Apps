import { MdPostAdd, MdMessage } from "react-icons/md";
import classes from "./Header.module.css";
import { useContext } from "react";
import ModalContext from "../../store/ModalContext";
import Button from "../../weatherComponents/UI/Button";

export default function Header() {
  const modalCtx = useContext(ModalContext);

  function handleShowModal() {
    modalCtx.showModal("newTodo");
  }
  return (
    <div className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        Todo App
      </h1>
      <p>
        <Button onClick={handleShowModal}>
          <MdPostAdd size={18} />
          New Post
        </Button>
      </p>
    </div>
  );
}
