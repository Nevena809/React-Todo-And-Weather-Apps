import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

export default function Modal({ children }) {
  return createPortal(
    <div className={classes.backdrop}>
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </div>,
    document.getElementById("modal")
  );
}
