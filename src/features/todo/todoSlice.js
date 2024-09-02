import { createSlice, nanoid } from "@reduxjs/toolkit";

export const initialState = {
  todos: [],
  editing: {},
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        myText: action.payload,
      };
      console.log("hello");

      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos.map((todo) => {});
    },
    setEditing: (state, action) => {
      state.editing = action.payload;
    },

    clearEditingTodo: (state) => {
      state.editing = {};
    },
    updateTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index].myText = action.payload.myText;
      }
    },
  },
});

export const { addTodo, deleteTodo, setEditing, updateTodo, clearEditingTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
