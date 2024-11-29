import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Todo from "./Apps/Todo";
import Root from "./Apps/Root";
import Weather from "./Apps/Weather";

const router = createBrowserRouter([
  { path: "/", element: <Root /> },
  { path: "/weather", element: <Weather /> },
  { path: "/todo", element: <Todo /> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
