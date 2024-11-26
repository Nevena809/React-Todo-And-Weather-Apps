import "./App.css";
import Header from "./todoComponents/Header/Header";
import TodoList from "./todoComponents/TodoList/TodoList";
import NewTodo from "./todoComponents/NewTodo/NewTodo";
import { TodoContextProvider } from "./store/TodoContext";
import { TypeContextProvider } from "./store/TypeContext";

function App() {
  return (
    <TypeContextProvider>
      <TodoContextProvider>
        <Header></Header>
        <NewTodo></NewTodo>
        <main>
          <TodoList></TodoList>
        </main>
      </TodoContextProvider>
    </TypeContextProvider>
  );
}

export default App;
