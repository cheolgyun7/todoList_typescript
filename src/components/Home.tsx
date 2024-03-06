// src/features/todo/TodoApp.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { deleteTodo, toggleTodo } from "../redux/todoSlice";
// import { fetchTodos } from "../redux/todoAction";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todo.todos);

  const workingTodos = todos.filter((todo) => !todo.completed);
  const doneTodos = todos.filter((todo) => todo.completed);

  const handleToggleClick = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteClick = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <h3>React_typescript</h3>
      <TodoForm />
      <TodoList
        todos={workingTodos}
        headTitle="진행중"
        onToggleClick={handleToggleClick}
        onDeleteClick={handleDeleteClick}
      />
      <TodoList
        todos={doneTodos}
        headTitle="완료"
        onToggleClick={handleToggleClick}
        onDeleteClick={handleDeleteClick}
      />
    </div>
  );
};

export default TodoApp;
