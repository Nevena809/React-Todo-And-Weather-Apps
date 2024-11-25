import "./App.css";
import Header from "./todoComponents/Header/Header";
import TodoList from "./todoComponents/TodoList/TodoList";
import NewTodo from "./todoComponents/NewTodo/NewTodo";
import { useState } from "react";
import { TodoContextProvider } from "./store/TodoContext";
import { TypeContextProvider } from "./store/TypeContext";

function App() {
  const [showModal, setShowModal] = useState(false);

  function handleShowModal() {
    setShowModal((prevState) => !prevState);
  }

  return (
    <TypeContextProvider>
      <TodoContextProvider>
        <Header showModal={handleShowModal}></Header>
        {showModal && <NewTodo hideModal={handleShowModal}></NewTodo>}
        <main>
          <TodoList></TodoList>
        </main>
      </TodoContextProvider>
    </TypeContextProvider>
  );
}

export default App;
