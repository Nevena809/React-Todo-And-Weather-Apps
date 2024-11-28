import { ModalContextProvider } from "./store/ModalContext";
import { TodoContextProvider } from "./store/TodoContext";
import Header from "./todoComponents/Header/Header";
import NewTodo from "./todoComponents/NewTodo/NewTodo";
import TodoList from "./todoComponents/TodoList/TodoList";

export default function Todo() {
  return (
    <ModalContextProvider>
      <TodoContextProvider>
        <Header></Header>
        <NewTodo></NewTodo>
        <main>
          <TodoList></TodoList>
        </main>
      </TodoContextProvider>
    </ModalContextProvider>
  );
}
