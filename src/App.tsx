import { useState } from "react";
import MainTodo from "./assets/pages/MainTodo";
import TodoContext from "./assets/context/TodoContext";
import { Todo } from "./assets/@types/todo";

const App = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const completeTodo = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const removeTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, completeTodo, removeTodo }}>
      <MainTodo />
    </TodoContext.Provider>
  );
};

export default App;
