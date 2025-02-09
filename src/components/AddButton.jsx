import React from "react";
import { motion } from "motion/react";

const AddButton = ({ setIsAddToDo }) => {
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 0.9 }}
      className="absolute top-3 right-20 h-13 w-60 bg-slate-700 flex justify-center items-center px-3 rounded-full overflow-hidden"
    >
      <button
        onClick={() => {
          setIsAddToDo(true);
        }}
        className="text-xl h-full w-full px-3 text-white cursor-pointer"
      >
        Add To-Do
      </button>
    </motion.div>
  );
};

export default React.memo(AddButton);
