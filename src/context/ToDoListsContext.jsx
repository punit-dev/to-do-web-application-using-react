import React, { createContext, useState } from "react";

export const ToDoListsContext = createContext();

export const ToDoProvider = ({ children }) => {
  const [lists, setLists] = useState([]);
  const keyCode = [
    "KeyA",
    "KeyB",
    "KeyC",
    "KeyD",
    "KeyE",
    "KeyF",
    "KeyG",
    "KeyH",
    "KeyI",
    "KeyJ",
    "KeyK",
    "KeyL",
    "KeyM",
    "KeyN",
    "KeyO",
    "KeyP",
    "KeyQ",
    "KeyR",
    "KeyS",
    "KeyT",
    "KeyU",
    "KeyV",
    "KeyW",
    "KeyX",
    "KeyY",
    "KeyZ",
    "Digit1",
    "Digit2",
    "Digit3",
    "Digit4",
    "Digit5",
    "Digit6",
    "Digit7",
    "Digit8",
    "Digit9",
    "Digit0",
    "Space",
    "Enter",
  ];
  const addList = (title, desc) => {
    const list = { id: Date.now(), title, desc, isDone: false };
    setLists([...lists, list]);
  };

  const markAsDone = (id) => {
    setLists((prevLists) =>
      prevLists.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const deleteTodo = (idx) => {
    const copyLists = [...lists];
    copyLists.splice(idx, 1);
    setLists(copyLists);
  };

  return (
    <ToDoListsContext.Provider
      value={{ addList, lists, markAsDone, deleteTodo, keyCode }}
    >
      {children}
    </ToDoListsContext.Provider>
  );
};
