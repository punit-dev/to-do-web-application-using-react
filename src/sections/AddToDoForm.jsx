import React, { useContext, useState } from "react";
import { ToDoListsContext } from "../context/ToDoListsContext";
import { motion } from "motion/react";

const AddToDoForm = ({ isAddToDo, setIsAddToDo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { addList, keyCode } = useContext(ToDoListsContext);
  const [border, setBorder] = useState("#000");
  const [textCount, setTextCount] = useState(85);
  const [selectedTextCount, setSelectedTextCount] = useState(1);

  const textHandel = () => {
    const selection = window.getSelection();
    const selectedString = selection.toString();
    if (selectedString.length >= 1) {
      setSelectedTextCount(selectedString.length);
    }
  };

  const handleKeyDown = (key) => {
    if (key.code === "Backspace" || key.code === "Delete") {
      if (textCount < 85) {
        setTextCount(textCount + selectedTextCount);
        setSelectedTextCount(1);
      }
    } else if (keyCode.includes(key.code)) {
      if (textCount > 0) {
        setTextCount(textCount - 1);
      }
    }
  };

  const formEvent = (e) => {
    e.preventDefault();
    if (title.length !== 0 && desc.length !== 0) {
      addList(title, desc);
      setTitle("");
      setDesc("");
    } else {
      alert("Please fill in all fields.");
      setBorder("#ff0000");
    }
  };

  return (
    <motion.div
      className="absolute h-screen flex justify-center items-center w-1/2 backdrop-blur-md z-10"
      initial={{ translateX: "175vh" }}
      animate={{ translateX: isAddToDo ? "70vh" : "175vh" }}
      transition={{ delay: 0.4 }}
    >
      <motion.div
        whileTap={{ scaleX: 0.9, scaleY: 1.2 }}
        onClick={() => setIsAddToDo((prev) => !prev)}
        className="absolute text-white top-3 left-3 px-4 cursor-pointer border-2 border-white rounded-xl"
      >
        <h1 className="text-xl">Back</h1>
      </motion.div>
      <form
        className="flex flex-col gap-5 z-10 backdrop-blur-2xl bg-white/20 h-1/2 w-65 rounded-2xl px-4 py-5 justify-center items-center"
        onSubmit={formEvent}
      >
        <h1 className="text-white text-2xl">Add a New ToDo</h1>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
            setBorder("#000");
          }}
          value={title}
          type="text"
          placeholder="Enter ToDo title"
          className={`w-full h-12 bg-white p-2 rounded-2xl outline-none border-2`}
          style={{ borderColor: border }}
        />
        <div
          className="w-full h-26 bg-white px-1 rounded-2xl border-2"
          style={{ borderColor: border }}
        >
          <textarea
            maxLength={85}
            onChange={(e) => {
              setDesc(e.target.value);
              setBorder("#000");
            }}
            onKeyDown={handleKeyDown}
            onSelect={textHandel}
            value={desc}
            cols={10}
            placeholder="Enter ToDo Description"
            className="w-full h-auto mt-1 outline-none overflow-hidden touch-none resize-none"
          ></textarea>
          <span className="text-sm font-semibold absolute right-6 bottom-20">
            {textCount}
          </span>
        </div>
        <motion.button
          whileTap={{ scaleX: 1.1 }}
          onClick={() => {
            if (title.length !== 0 && desc.length !== 0) {
              setIsAddToDo((prev) => !prev);
              setTextCount(85);
            }
          }}
          className="bg-yellow-300 h-10 w-1/2 px-3 py-2 rounded-2xl cursor-pointer"
        >
          Add ToDo
        </motion.button>
      </form>
    </motion.div>
  );
};

export default AddToDoForm;
