import { createContext, useState } from "react";
/* eslint-disable react/prop-types */

const ModalContext = createContext({
  showModal: () => {},
  hideModal: () => {},
  modalData: null,
  isOpen: false,
  buttonType: "",
});

export function ModalContextProvider({ children }) {
  const [modalData, setModalData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [buttonType, setButtonType] = useState("");

  function showModal(type, data) {
    setIsOpen(true);
    setButtonType(type);
    setModalData(data);
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
    <ModalContext.Provider value={typeCtx}>{children}</ModalContext.Provider>
  );
}

export default ModalContext;
