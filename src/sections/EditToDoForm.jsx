import React, { useContext, useState } from "react";
import { motion } from "motion/react";
import { ToDoListsContext } from "../context/ToDoListsContext";

const EditToDoForm = ({ isEdit, setIsEdit, title, desc, id }) => {
  const [heading, setHeading] = useState(title);
  const [description, setDescription] = useState(desc);
  const [textCount, setTextCount] = useState(85 - desc.length);
  const { keyCode, editTodo } = useContext(ToDoListsContext);
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{
        scale: isEdit ? 1 : 0,
      }}
      className="h-screen w-full absolute bg-black/15 backdrop-blur-md z-10 flex justify-center items-center"
    >
      <div
        onClick={() => {
          setIsEdit((prev) => !prev);
        }}
      >
        back
      </div>
      <form
        className="flex flex-col gap-5 z-10 backdrop-blur-2xl h-[70%] w-80 rounded-2xl px-4 py-5 justify-center items-center"
        onSubmit={(e) => {
          e.preventDefault();
          if (heading.length !== 0 && description.length !== 0) {
            editTodo(id, heading, description);
          }
        }}
      >
        <h1 className="text-white text-2xl">Edit Your ToDo</h1>
        <input
          type="text"
          value={heading}
          onChange={(e) => {
            setHeading(e.target.value);
          }}
          className="w-full h-12 bg-white p-2 rounded-2xl outline-none border-2"
        />
        <div className="w-full h-26 bg-white px-1 rounded-2xl border-2 relative">
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            onKeyDown={(key) => {
              if (key.code == "Backspace" || key.code == "Delete") {
                if (textCount < 85) {
                  setTextCount(textCount + 1);
                }
              }
            }}
            onSelect={(e) => {
              if (e.currentTarget.value == 0) {
                setTextCount(85);
              } else if (keyCode.includes(e.nativeEvent.code)) {
                if (textCount > 0) {
                  setTextCount(textCount - 1);
                }
              }
            }}
            maxLength={85}
            cols={10}
            placeholder="Enter ToDo Description"
            className="w-full h-auto mt-1 outline-none overflow-hidden touch-none resize-none"
          ></textarea>
          <span className="text-sm font-semibold absolute right-1 bottom-1">
            {textCount}
          </span>
        </div>
        <motion.button
          whileTap={{ scaleX: 1.1 }}
          onClick={() => {
            setIsEdit((prev) => !prev);
          }}
          className="bg-yellow-300 h-10 w-1/2 px-3 py-2 rounded-2xl cursor-pointer"
        >
          Edit
        </motion.button>
      </form>
    </motion.div>
  );
};

export default EditToDoForm;
