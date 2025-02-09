import React, { useState, useContext } from "react";
import TodoCard from "./components/TodoCard";
import AddToDoForm from "./sections/AddToDoForm";
import { ToDoListsContext } from "./context/ToDoListsContext";
import DeleteConfirmation from "./components/DeleteConfirmation";
import EditToDoForm from "./sections/EditToDoForm";
import Header from "./components/Header";
import AddButton from "./components/AddButton";

const App = () => {
  const [isAddToDo, setIsAddToDo] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [idx, setIdx] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const { lists, markAsDone, deleteTodo } = useContext(ToDoListsContext);

  return (
    <div className="h-screen w-full bg-zinc-800 flex justify-center flex-col items-center relative overflow-hidden">
      <Header />
      <AddButton setIsAddToDo={setIsAddToDo} />
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
            isEdit={isEdit}
            setIsEdit={setIsEdit}
          />
        ))}
      </div>
      <AddToDoForm isAddToDo={isAddToDo} setIsAddToDo={setIsAddToDo} />
      {idx !== null && idx < lists.length && (
        <EditToDoForm
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          title={lists[idx].title}
          desc={lists[idx].desc}
          id={lists[idx].id}
        />
      )}
      <DeleteConfirmation
        isDelete={isDelete}
        setIsDelete={setIsDelete}
        idx={idx}
        deletetodo={deleteTodo}
      />
    </div>
  );
};

export default App;
