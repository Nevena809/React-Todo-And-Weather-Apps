import Modal from "../Modal";
import classes from "./NewTodo.module.css";

export default function NewTodo({ hideModal }) {
  return (
    <Modal>
      <form method="dialog" className={classes.form}>
        <p>
          <label htmlFor="todo">Todo</label>
          <input type="text" id="todo" name="todo" required />
        </p>
        <p>
          <label htmlFor="desc">Description</label>
          <textarea id="desc" name="desc" required rows={3} />
        </p>
        <p className={classes.actions}>
          <button onClick={hideModal} type="button">
            Cancel
          </button>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}
