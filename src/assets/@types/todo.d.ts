export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoContextType {
  todos: Array<Todo>;
  addTodo: (todo: Todo) => void;
  completeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}
