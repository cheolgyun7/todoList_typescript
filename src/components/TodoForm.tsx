// src/features/todo/TodoForm.tsx
import React, { useRef } from "react";
import { addTodo } from "../api/todos";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { Todo } from "../types/types";

const TodoForm: React.FC = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);
  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  const queryClient = useQueryClient();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!titleRef.current || !contentRef.current) return;
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      content,
      completed: false,
    };
    mutation.mutate(newTodo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">제목 : </label>
      <input id="title" name="title" ref={titleRef} />
      <br />
      <label htmlFor="content">내용 : </label>
      <input id="content" name="content" ref={contentRef} />
      <button type="submit">저장</button>
    </form>
  );
};

export default TodoForm;
