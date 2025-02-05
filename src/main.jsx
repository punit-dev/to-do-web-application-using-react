// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToDoProvider } from "./context/ToDoLists.jsx";

createRoot(document.getElementById("root")).render(
  <ToDoProvider>
    <App />
  </ToDoProvider>
);
