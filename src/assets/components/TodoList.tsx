import { useContext } from "react";
import { TodoContextType } from "../@types/todo";
import TodoContext from "../context/TodoContext";
import { MdDeleteSweep } from "react-icons/md";

const TodoList = () => {
  const { todos, completeTodo, removeTodo } =
    useContext<TodoContextType>(TodoContext);

  const handleComplete = (id: number) => {
    completeTodo(id);
  };

  const handleRemove = (id: number) => {
    removeTodo(id);
  };

  return (
    <div className="wrapper flex flex-col justify-center items-center mt-3">
      {todos.length === 0 ? (
        <h1 className="text-[60px] font-bold text-slate-400">
          No Todos Added Yet 😒
        </h1>
      ) : (
        <div className="items-wrapper flex flex-col gap-3">
          {todos
            .map((todo, index) => (
              <div
                key={index}
                className="item-wrapper flex items-center justify-between w-[600px] p-5 border border-purple-800/[50%] rounded-md"
              >
                <h1
                  className={todo.completed ? "line-through text-gray-400" : ""}
                >
                  {todo.title}
                </h1>
                {todo.completed ? (
                  <div className="wrapper flex items-center gap-3">
                    <h1 className="text-green-700">Completed</h1>
                    <button onClick={() => handleRemove(todo.id)}>
                      <MdDeleteSweep className="text-[30px] text-red-400" />
                    </button>
                  </div>
                ) : (
                  <div className="wrapper flex items-center gap-3">
                    <button
                      onClick={() => handleComplete(todo.id)}
                      className="border p-2 rounded-md text-red-400 border-red-400 hover:bg-red-400/[20%]"
                    >
                      Complete
                    </button>
                    <button onClick={() => handleRemove(todo.id)}>
                      <MdDeleteSweep className="text-[30px] text-red-400" />
                    </button>
                  </div>
                )}
              </div>
            ))
            .reverse()}
        </div>
      )}
    </div>
  );
};

export default TodoList;
