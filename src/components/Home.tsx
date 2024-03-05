import React, { useState } from "react";
import TodoList from "./TodoList";

export interface Todo {
  id: number;
  title: string;
  content: string;
  completed: boolean;
}

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newTodo: Todo = {
      id: todos.length + 1,
      title,
      content,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setContent("");
  };
  const onToggleClick = (id: number) => {
    // 작성글의id를 클릭
    setTodos(
      (
        prevTodos //setTodos호출
      ) =>
        prevTodos.map(
          (
            todo //전의 todos를 map함수로 호출
          ) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        )
    );
  };
  const onDeleteClick = (id: number) => {
    setTodos((todo) => todo.filter((item) => item.id !== id));
  };

  const workingTodos = todos.filter((todo) => !todo.completed);
  const DoneTodos = todos.filter((todo) => todo.completed);

  return (
    <div>
      <h3>React_typescript</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">제목 : </label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="content">내용 : </label>
        <input
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">저장</button>
      </form>
      <TodoList
        todos={workingTodos}
        headTitle="진행중"
        onToggleClick={onToggleClick}
        onDeleteClick={onDeleteClick}
      />
      <TodoList
        todos={DoneTodos}
        headTitle="완료"
        onToggleClick={onToggleClick}
        onDeleteClick={onDeleteClick}
      />
    </div>
  );
};

export default Home;
