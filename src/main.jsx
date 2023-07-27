import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import { RouterProvider, createHashRouter } from "react-router-dom";
import "./index.css";
import LoginA from "./components/notLoged/LoginA.jsx";
import Signup from "./components/notLoged/Signup.jsx";
import Chatting from "./components/loged/Chatting.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginA />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/home",
    element: <Chatting />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
