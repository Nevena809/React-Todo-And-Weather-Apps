// import { useContext } from "react";
// import Modal from "../Modal";
// import { useRef } from "react";
// import classes from "./NewTodo.module.css";
// import TodoContext from "../../store/TodoContext";
// import TypeContext from "../../store/TypeContext";

// export default function NewTodo() {
//   const title = useRef();
//   const description = useRef();
//   const todoCtx = useContext(TodoContext);
//   const typeCtx = useContext(TypeContext);

//   async function handleAddTodo() {
//     const enteredTitle = title.current.value;
//     const enteredDesc = description.current.value;

//     const response = await fetch(
//       "https://66d5fefbf5859a704268148c.mockapi.io/api/v1/getTodos",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           title: enteredTitle,
//           description: enteredDesc,
//         }),
//       }
//     );
//     const data = await response.json();
//     console.log(data);

//     todoCtx.addTodo({
//       id: data.id,
//       title: enteredTitle,
//       description: enteredDesc,
//     });

//     title.current.value = "";
//     description.current.value = "";

//     typeCtx.hideModal();
//   }

//   function handleHideModal() {
//     typeCtx.hideModal();
//   }

//   return (
//     <Modal open={typeCtx.isOpen} onClose={typeCtx.hideModal}>
//       <form method="dialog" className={classes.form}>
//         <p>
//           <label htmlFor="todo">Todo</label>
//           <input type="text" id="todo" name="todo" required ref={title} />
//         </p>
//         <p>
//           <label htmlFor="desc">Description</label>
//           <textarea id="desc" name="desc" required rows={3} ref={description} />
//         </p>
//         <p className={classes.actions}>
//           <button onClick={handleHideModal} type="button">
//             Cancel
//           </button>
//           {typeCtx.buttonType === "newTodo" ? (
//             <button type="button" onClick={handleAddTodo}>
//               Submit
//             </button>
//           ) : (
//             <button type="button">Update</button>
//           )}
//         </p>
//       </form>
//     </Modal>
//   );
// }

import { useContext, useRef, useEffect } from "react";
import Modal from "../Modal";
import classes from "./NewTodo.module.css";
import TodoContext from "../../store/TodoContext";
import TypeContext from "../../store/TypeContext";

export default function NewTodo() {
  const title = useRef();
  const description = useRef();
  const todoCtx = useContext(TodoContext);
  const typeCtx = useContext(TypeContext);

  const { modalData, buttonType } = typeCtx;

  // Prefill the form when modalData is available
  useEffect(() => {
    if (modalData && buttonType === "updateTodo") {
      title.current.value = modalData.title;
      description.current.value = modalData.description;
    }
  }, [modalData, buttonType]);

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

    typeCtx.hideModal();
  }

  async function handleUpdateTodo() {
    const enteredTitle = title.current.value;
    const enteredDesc = description.current.value;

    // Send the updated data to the backend
    const response = await fetch(
      `https://66d5fefbf5859a704268148c.mockapi.io/api/v1/getTodos/${modalData.id}`,
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

    todoCtx.updateTodo(data); // Update the global state with the updated todo

    typeCtx.hideModal();
  }

  function handleHideModal() {
    typeCtx.hideModal();
  }

  return (
    <Modal open={typeCtx.isOpen} onClose={typeCtx.hideModal}>
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
          {buttonType === "newTodo" ? (
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
