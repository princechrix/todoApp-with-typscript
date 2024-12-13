import React, { useContext, useState, useRef } from "react";
import { TodoContextType } from "../@types/todo";
import TodoContext from "../context/TodoContext";

const AddTodo = () => {
  const { addTodo } = useContext<TodoContextType>(TodoContext);
  const [todo, setTodo] = useState<string>("");

  const todoInputElement = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo.trim() === "") return;

    addTodo({
      id: Math.floor(Math.random() * 1000),
      title: todo,
      completed: false,
    });

    if (todoInputElement.current) {
      todoInputElement.current.value = "";
    }
    setTodo("");
  };

  return (
    <div className="wrapper w-full h-[200px] bg-purple-800 text-white flex flex-col gap-5 justify-center items-center sticky top-0">
      <div className="title-wrapper text-center">
        <h1 className="text-3xl font-bold">React + Typescript (Todo App)</h1>
      </div>

      <form
        className="input-wrapper flex items-center gap-3"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          className="h-[50px] w-[400px] px-5 rounded-md text-black"
          placeholder="Type your todo"
          ref={todoInputElement}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="border border-white min-w-[100px] h-[50px] rounded-md"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
