import { motion } from "motion/react";
import React from "react";

const TodoCard = ({
  title,
  desc,
  isDone,
  id,
  markAsDone,
  isDelete,
  setIsDelete,
  setIdx,
  idx,
}) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
      }}
      className="h-65 w-55 bg-black rounded-2xl mt-3 flex items-center flex-col overflow-hidden justify-between cursor-default"
      style={{
        backgroundColor: isDone ? "#05bd82" : "black",
        color: isDone ? "black" : "white",
      }}
    >
      <h1 className="text-xl font-semibold mt-2 text-center">{title}</h1>
      <div className="p-2">
        <p>{desc}</p>
      </div>
      <div className="flex gap-2 h-20 w-full justify-center items-center">
        <motion.button
          whileTap={{
            scale: 0.95,
          }}
          whileHover={{
            backgroundColor: "oklch(0.704 0.291 22.216)",
          }}
          className="w-1/3 h-1/2 px-3 bg-red-400 rounded-2xl cursor-pointer"
          onClick={() => {
            setIsDelete(!isDelete);
            setIdx(idx);
          }}
        >
          Delete
        </motion.button>
        <motion.button
          whileTap={{
            scale: 0.95,
          }}
          whileHover={{
            backgroundColor: "oklch(0.600 0.291 150.711)",
          }}
          className="w-auto h-1/2 px-4 bg-green-400 rounded-2xl cursor-pointer text-black"
          onClick={() => {
            markAsDone(id);
          }}
        >
          {isDone ? "Undo" : "Mark as Done"}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TodoCard;
