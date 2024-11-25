import { useContext } from "react";
import Modal from "../Modal";
import { useRef } from "react";
import classes from "./NewTodo.module.css";
import TodoContext from "../../store/TodoContext";

export default function NewTodo({ hideModal }) {
  const text = useRef();
  const description = useRef();
  const todoCtx = useContext(TodoContext);

  async function handleAddTodo() {
    const enteredTitle = text.current.value;
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
    console.log(data);

    todoCtx.addTodo({
      id: data.id,
      title: enteredTitle,
      description: enteredDesc,
    });

    hideModal();
  }
  return (
    <Modal open={hideModal}>
      <form method="dialog" className={classes.form}>
        <p>
          <label htmlFor="todo">Todo</label>
          <input type="text" id="todo" name="todo" required ref={text} />
        </p>
        <p>
          <label htmlFor="desc">Description</label>
          <textarea id="desc" name="desc" required rows={3} ref={description} />
        </p>
        <p className={classes.actions}>
          <button onClick={hideModal} type="button">
            Cancel
          </button>
          <button type="button" onClick={handleAddTodo}>
            Submit
          </button>
        </p>
      </form>
    </Modal>
  );
}
