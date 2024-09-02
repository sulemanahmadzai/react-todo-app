import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  updateTodo,
  clearEditingTodo,
} from "../features/todo/todoSlice";

function AddTodo() {
  const [buttonName, setButtonName] = useState("Add");
  const editing = useSelector((state) => state.editing);

  const dispatch = useDispatch();
  const [text, setText] = React.useState("");

  useEffect(() => {
    if (editing.id) {
      setText(editing.myText);
      setButtonName("Update");
    }
  }, [editing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing.id) {
      dispatch(
        updateTodo({
          id: editing.id,
          myText: text,
        })
      );
      dispatch(clearEditingTodo());
      setButtonName("Add");
    } else {
      dispatch(addTodo(text));
    }
    setText("");
  };

  return (
    // In ShowTodo component
    <div className=" ">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-10 flex items-center gap-2"
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-800 shadow-lg  flex-grow p-2 border-2 border-blue-500 rounded-md"
          placeholder="Enter a new todo..."
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md
         dark:bg-gray-800 shadow-lg 
          "
        >
          {buttonName}
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
