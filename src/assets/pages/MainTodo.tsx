import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const MainTodo = () => {
  return (
    <div className="w-full h-screen">
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default MainTodo;
