import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, setEditing } from "../features/todo/todoSlice";

function ShowTodo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleEdit = (todo) => {
    dispatch(
      setEditing({
        id: todo.id,
        myText: todo.myText,
      })
    );
  };

  return (
    // In ShowTodo component

    <div className="max-w-md mx-auto mt-10">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <div
            key={todo.id}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 mb-4"
          >
            <div className="flex justify-between items-center">
              <p className="text-gray-900 dark:text-gray-200">{todo.myText}</p>
              <div>
                <button
                  onClick={() => dispatch(deleteTodo(todo.id))}
                  className="text-red-500 hover:text-red-700 transition duration-150 ease-in-out mr-2"
                  aria-label="Delete todo"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <button
                  name="xyz"
                  onClick={() => handleEdit(todo)}
                  className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out"
                  aria-label="Edit todo"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.232 5.477a1.75 1.75 0 112.475 2.475l-7.965 7.964a1.75 1.75 0 01-.894.485l-2.864.573a.25.25 0 01-.293-.293l.573-2.864a1.75 1.75 0 01.485-.894l7.965-7.964z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.75 9.75l-1.5-1.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No todos yet!</p>
      )}
    </div>
  );
}

export default ShowTodo;
