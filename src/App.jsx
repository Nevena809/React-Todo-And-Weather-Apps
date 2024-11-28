import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Todo from "./Todo";
import Root from "./Root";
import Weather from "./Weather";

const router = createBrowserRouter([
  { path: "/", element: <Root /> },
  { path: "/weather", element: <Weather /> },
  { path: "/todo", element: <Todo /> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
