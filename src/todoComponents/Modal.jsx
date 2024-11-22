import { createPortal } from "react-dom";
import classes from "./Modal.module.css";
import { useRef, useEffect } from "react";

export default function Modal({ children, open }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    }
  }, [open]);
  return createPortal(
    <div className={classes.backdrop}>
      <dialog ref={dialog} className={classes.modal}>
        {children}
      </dialog>
    </div>,
    document.getElementById("modal")
  );
}
