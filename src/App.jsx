import "./App.css";
import Header from "./todoComponents/Header/Header";
import TodoList from "./todoComponents/TodoList/TodoList";
import NewTodo from "./todoComponents/NewTodo/NewTodo";
import { TodoContextProvider } from "./store/TodoContext";
import { ModalContextProvider } from "./store/ModalContext";

function App() {
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

export default App;
