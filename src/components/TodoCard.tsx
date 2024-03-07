import React from "react";
import { Todo } from "../types/types";
import { deleteTodo, toggleTodo } from "../api/todos";
import { useMutation, useQueryClient } from "react-query";

interface TodoCardProps {
  todo: Todo;
  isActive: boolean;
}

const TodoCard: React.FC<TodoCardProps> = ({ todo, isActive }) => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("todos");
    },
  });
  const toggleMutation = useMutation(toggleTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  const handleToggleButton = (id: string, completed: boolean): void => {
    toggleMutation.mutate({ id, completed });
  };
  const deleteButton = (id: string) => {
    if (window.confirm("삭제?")) {
      deleteMutation.mutate(id);
      alert("삭제 완료");
    } else {
      alert("삭제취소");
    }
  };

  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.content}</p>
      <button onClick={() => handleToggleButton(todo.id, !todo.completed)}>
        {isActive ? "완료" : "취소"}
      </button>
      <button onClick={() => deleteButton(todo.id)}>삭제</button>
    </div>
  );
};

export default TodoCard;
