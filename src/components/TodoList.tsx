import React from "react";
import { Todo } from "./Home";

interface TodoListProps {
  todos: Todo[];
  headTitle: string;
  onToggleClick: (id: number) => void; //아무것도 반환하지 않음을 선언
  onDeleteClick: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  headTitle,
  onToggleClick,
  onDeleteClick,
}) => {
  return (
    <div>
      <h3>{headTitle}</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div>
              <strong>{todo.title}</strong>
            </div>
            <div>{todo.content}</div>
            <button onClick={() => onDeleteClick(todo.id)}>삭제</button>
            <button onClick={() => onToggleClick(todo.id)}>
              {todo.completed ? "취소" : "완료"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;