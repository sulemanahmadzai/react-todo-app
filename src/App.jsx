import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./features/todo/todoSlice";
import AddTodo from "./Components/AddTodo";
import ShowTodo from "./Components/ShowTodo";
import DarkModeToggle from "./Components/DarkModeToggle"; // Make sure to import it
import { useEffect } from "react";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      savedTodos.forEach((todo) => {
        if (!todos.some((t) => t.myText === todo.myText)) {
          dispatch(addTodo(todo.myText));
        }
      });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="flex flex-col min-h-screen ">
      <header className="flex justify-between items-center bg-blue-500 dark:bg-gray-800 text-white p-4 font-bold text-2xl">
        <div className="flex-1"></div> {/* Empty div for centering the title */}
        <h1 className="flex-1 text-center">Todo App</h1> {/* Centered title */}
        <div className="flex-1 text-right">
          <DarkModeToggle /> {/* Toggle button aligned to the right */}
        </div>
      </header>

      <div className="flex-grow">
        <div className="max-w-md mx-auto mt-10">
          <AddTodo />
          <ShowTodo />
        </div>
      </div>

      <footer className="bg-gray-200 dark:bg-gray-800 text-center p-4 text-gray-700 dark:text-gray-200 mt-10 w-full">
        <div className="flex justify-center space-x-4">
          <a
            href="https://web.facebook.com/people/Suleman-Ahmadzai/100085266291396/?locale=en_GB"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <i className="fab fa-facebook-f">Facebook</i>
          </a>
          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800"
          >
            <i className="fab fa-instagram">Instagram</i>
          </a>
          <a
            href="https://www.linkedin.com/in/suleman-ahmadzai-83807b265"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <i className="fab fa-linkedin-in">Linkedin</i>
          </a>
        </div>
        © {new Date().getFullYear()} Todo App by Suleman Ahmadzai
      </footer>
    </div>
  );
}

export default App;
