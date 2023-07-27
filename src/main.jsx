import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";
import "./index.css";
import LoginA from "./components/notLoged/LoginA.jsx";
import Signup from "./components/notLoged/Signup.jsx";
import Chatting from "./components/loged/Chatting.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
    />
    <Route
      path="/login"
      element={<LoginA />}
    />
    <Route
      path="/signup"
      element={<Signup />}
    />
    <Route
      path="/home"
      element={<Chatting />}
    />
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(  
  <RouterProvider router={router} />
);
