import { createContext } from "react";
import { TodoContextType } from "../@types/todo";

const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
  completeTodo: () => {},
  removeTodo: () => {},
});

export default TodoContext;
