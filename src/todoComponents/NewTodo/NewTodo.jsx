import { useContext, useRef } from "react";
import Modal from "../Modal";
import classes from "./NewTodo.module.css";
import TodoContext from "../../store/TodoContext";
import ModalContext from "../../store/ModalContext";

export default function NewTodo() {
  const title = useRef();
  const description = useRef();
  const todoCtx = useContext(TodoContext);
  const modalCtx = useContext(ModalContext);

  async function handleAddTodo() {
    const enteredTitle = title.current.value;
    const enteredDesc = description.current.value;

    const response = await fetch(
      "https://66d5fefbf5859a704268148c.mockapi.io/api/v1/getTodos",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: enteredTitle,
          description: enteredDesc,
        }),
      }
    );
    const data = await response.json();

    todoCtx.addTodo({
      id: data.id,
      title: enteredTitle,
      description: enteredDesc,
    });

    title.current.value = "";
    description.current.value = "";

    modalCtx.hideModal();
  }

  async function handleUpdateTodo() {
    const enteredTitle = title.current.value;
    const enteredDesc = description.current.value;

    const response = await fetch(
      `https://66d5fefbf5859a704268148c.mockapi.io/api/v1/getTodos/${modalCtx.modalData.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: enteredTitle,
          description: enteredDesc,
        }),
      }
    );
    const data = await response.json();

    todoCtx.updateTodo({
      id: data.id,
      title: enteredTitle,
      description: enteredDesc,
    });

    modalCtx.hideModal();
  }

  function handleHideModal() {
    modalCtx.hideModal("updateTodo", {
      title: null,
      description: null,
    });
  }

  if (modalCtx.modalData && modalCtx.buttonType === "updateTodo") {
    title.current.value = modalCtx.modalData.title;
    description.current.value = modalCtx.modalData.description;
  }

  return (
    <Modal open={modalCtx.isOpen} onClose={modalCtx.hideModal}>
      <form method="dialog" className={classes.form}>
        <p>
          <label htmlFor="todo">Todo</label>

          <input type="text" id="todo" name="todo" required ref={title} />
        </p>
        <p>
          <label htmlFor="desc">Description</label>
          <textarea id="desc" name="desc" required rows={3} ref={description} />
        </p>
        <p className={classes.actions}>
          <button onClick={handleHideModal} type="button">
            Cancel
          </button>
          {modalCtx.buttonType === "newTodo" ? (
            <button type="button" onClick={handleAddTodo}>
              Submit
            </button>
          ) : (
            <button type="button" onClick={handleUpdateTodo}>
              Update
            </button>
          )}
        </p>
      </form>
    </Modal>
  );
}
