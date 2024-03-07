import React from "react";
import { getTodos } from "../api/todos";
import { useQuery } from "react-query";
import TodoCard from "./TodoCard";

interface TodoListProps {
  isActive: boolean;
}

const TodoList: React.FC<TodoListProps> = ({ isActive }) => {
  const { data, isLoading, isError } = useQuery("todos", getTodos);
  if (isLoading) {
    return <p>로딩중입니다....!</p>;
  }

  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }

  return (
    <div>
      <h3>{isActive ? "해야 할 일 😢" : "완료한 일 👍"}</h3>
      <ul>
        {data
          ?.filter((item) => item.completed === !isActive)
          .map((item) => {
            return <TodoCard key={item.id} todo={item} isActive={isActive} />;
          })}
      </ul>
    </div>
  );
};

export default TodoList;
