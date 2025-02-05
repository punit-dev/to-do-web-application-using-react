import React from "react";
import { motion } from "motion/react";
const DeleteConfirmation = ({ isDelete, setIsDelete, idx, deletetodo }) => {
  return (
    <motion.div
      initial={{ translateY: "110vh" }}
      animate={{
        translateY: isDelete ? "0vh" : "110vh",
      }}
      className="h-screen w-full bg-black/10 z-10 absolute flex justify-center items-center"
    >
      <motion.div className="p-4 bg-white rounded shadow-md absolute z-10">
        <p className="text-lg font-semibold mb-4">
          Are you sure you want to delete this to-do item?
        </p>
        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => {
              deletetodo(idx);
              setIsDelete(!isDelete);
            }}
          >
            Yes
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            onClick={() => {
              setIsDelete(!isDelete);
            }}
          >
            No
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DeleteConfirmation;
