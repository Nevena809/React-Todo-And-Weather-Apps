import { FaTrash } from "react-icons/fa";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import classes from "./TodoItem.module.css";
import { useContext } from "react";
import TodoContext from "../../store/TodoContext";
import ModalContext from "../../store/ModalContext";
/* eslint-disable react/prop-types */

export default function TodoItem({ todo, id }) {
  const todoCtx = useContext(TodoContext);
  const modalCtx = useContext(ModalContext);

  async function handleDelete() {
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

  function handleShowModal() {
    modalCtx.showModal("updateTodo", {
      id,
      title: todo.title,
      description: todo.description,
    });
  }

  return (
    <li className={classes.todo}>
      <div>
        <p className={classes.title}>{todo.title}</p>
        <p className={classes.description}>{todo.description}</p>
      </div>
      <button
        onClick={handleShowModal}
        className={classes.deleteButtonContainer}
      >
        <MdOutlinePublishedWithChanges
          className={classes.updateButton}
          size={26}
        />
      </button>
      <button onClick={handleDelete} className={classes.deleteButtonContainer}>
        <FaTrash className={classes.deleteButton} size={23} />
      </button>
    </li>
  );
}
