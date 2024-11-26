// import { createContext, useState } from "react";
// /* eslint-disable react/prop-types */

// const TypeContext = createContext({
//   isOpen: false,
//   buttonType: "",
//   showModal: () => {},
//   hideModal: () => {},
// });

// export function TypeContextProvider({ children }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [buttonType, setButtonType] = useState("");

//   function showModal(type) {
//     setIsOpen(true);
//     setButtonType(type);
//   }

//   function hideModal() {
//     setIsOpen(false);
//   }

//   const typeCtx = {
//     isOpen,
//     buttonType,
//     showModal,
//     hideModal,
//   };
//   return (
//     <TypeContext.Provider value={typeCtx}>{children}</TypeContext.Provider>
//   );
// }

// export default TypeContext;

import { createContext, useState } from "react";
/* eslint-disable react/prop-types */

const TypeContext = createContext({
  showModal: () => {},
  hideModal: () => {},
  modalData: null,
  isOpen: false,
  buttonType: "newTodo", // newTodo or updateTodo
});

export function TypeContextProvider({ children }) {
  const [modalData, setModalData] = useState(null); // Store the todo data
  const [isOpen, setIsOpen] = useState(false);
  const [buttonType, setButtonType] = useState("newTodo"); // This will differentiate new vs update

  function showModal(type, data) {
    setIsOpen(true);
    setButtonType(type);
    setModalData(data); // Pass data to modal if it's an update
  }

  function hideModal() {
    setIsOpen(false);
  }

  const typeCtx = {
    isOpen,
    buttonType,
    modalData,
    showModal,
    hideModal,
  };

  return (
    <TypeContext.Provider value={typeCtx}>{children}</TypeContext.Provider>
  );
}

export default TypeContext;
