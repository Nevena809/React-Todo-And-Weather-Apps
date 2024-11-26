import { createPortal } from "react-dom";
import classes from "./Modal.module.css";
import { useRef, useEffect } from "react";

export default function Modal({ children, open, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);
  return createPortal(
    <dialog ref={dialog} className={classes.modal} onClose={onClose}>
      {children}
    </dialog>,

    document.getElementById("modal")
  );
}
