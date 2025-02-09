import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const TodoCard = ({
  title,
  desc,
  isDone,
  id,
  markAsDone,
  setIsDelete,
  setIdx,
  idx,
  setIsEdit,
}) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(document.getElementById(`todo-card-${id}`));

    return () => {
      observer.disconnect();
    };
  }, [id]);

  if (!isInView) {
    return (
      <div
        id={`todo-card-${id}`}
        className="h-65 w-55 bg-black rounded-2xl mt-3"
      ></div>
    );
  }

  return (
    <motion.div
      id={`todo-card-${id}`}
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
      }}
      className="h-65 w-55 bg-black rounded-2xl mt-3 flex items-center flex-col overflow-hidden justify-between cursor-default relative"
      style={{
        backgroundColor: isDone ? "#05bd82" : "black",
        color: isDone ? "black" : "white",
      }}
    >
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="absolute right-2 top-0.5 opacity-50 text-md cursor-pointer"
        onClick={() => {
          setIdx(idx);
          setIsEdit((prev) => !prev);
        }}
      >
        <FontAwesomeIcon icon={faPenToSquare} />
      </motion.div>
      <h1 className="text-xl font-semibold mt-4 text-center">{title}</h1>
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
            setIsDelete((prev) => !prev);
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

export default React.memo(TodoCard);
