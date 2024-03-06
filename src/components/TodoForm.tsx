// src/features/todo/TodoForm.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../redux/todoSlice";
import { Todo } from "../types/types";
import axios from "axios";

const TodoForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/todos", {
        title,
        content,
        completed,
      });
      dispatch(addTodos(response.data));
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("에러:", error);
      alert("에러입니다");
    }
  };

  return (
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
  );
};

export default TodoForm;
