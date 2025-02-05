import React, { useState } from "react";
import { motion } from "motion/react";
import TodoCard from "./components/TodoCard";
import AddToDoForm from "./sections/AddToDoForm";
import { ToDoListsContext } from "./context/ToDoListsContext";
import DeleteConfirmation from "./components/DeleteConfirmation";

const App = () => {
  const [isAddToDo, setIsAddToDo] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [idx, setIdx] = useState(null);
  return (
    <ToDoListsContext.Consumer>
      {({ lists, markAsDone, deleteTodo }) => (
        <div className="h-screen w-full bg-zinc-800 flex justify-center flex-col items-center relative overflow-hidden">
          <div className="text-3xl text-white font-semibold flex justify-center items-center bg-zinc-900 h-15 w-1/2 rounded-full mt-3">
            To-Do List's
          </div>
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
              Add To-Do Day wise
            </button>
          </motion.div>
          <h1 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl text-zinc-700 -z-0">
            TO-DO
          </h1>
          <div className="h-screen w-screen z-10 relative grid grid-cols-5 overflow-auto left-4.5">
            {lists.map((ele, index) => (
              <TodoCard
                key={ele.id}
                id={ele.id}
                desc={ele.desc}
                title={ele.title}
                isDone={ele.isDone}
                markAsDone={markAsDone}
                deletedEle={deleteTodo}
                setIsDelete={setIsDelete}
                isDelete={isDelete}
                setIdx={setIdx}
                idx={index}
              />
            ))}
          </div>
          <AddToDoForm isAddToDo={isAddToDo} setIsAddToDo={setIsAddToDo} />
          <DeleteConfirmation
            isDelete={isDelete}
            setIsDelete={setIsDelete}
            idx={idx}
            deletetodo={deleteTodo}
          />
        </div>
      )}
    </ToDoListsContext.Consumer>
  );
};

export default App;
