import { randomUUID } from "crypto";
import React, { useState } from "react";
// import "./App.css";

interface Todo {
  id: number;
  name: string;
  constent: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [name, setName] = useState("");
  const [constent, setConstent] = useState("");
  console.log(todos);
  const handleSubmit = () => {
    let newTodos: Todo = {
      id: todos.length + 1,
      name,
      constent,
    };
    setTodos([...todos, newTodos]);
  };
  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름"
      />
      <br />
      <input
        value={constent}
        onChange={(e) => setConstent(e.target.value)}
        placeholder="내용"
      />
      <button onClick={handleSubmit}>저장</button>
    </div>
  );
}

export default App;
