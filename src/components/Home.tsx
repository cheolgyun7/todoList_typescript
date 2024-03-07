import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const Home = () => {
  return (
    <div>
      <h3>React_typescript</h3>
      <TodoForm />
      <TodoList isActive={true} />
      <TodoList isActive={false} />
    </div>
  );
};

export default Home;
