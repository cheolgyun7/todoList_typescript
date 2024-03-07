import axios from "axios";
import { Todo } from "../types/types";

const getTodos = async (): Promise<Todo[] | undefined> => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_JSON_SERVER_URL}/todos`
    );
    console.log(data);
    return data;
  } catch (error) {
    alert("데이터를 불러오는데 에러가 발생하였습니다");
    console.log(error);
  }
};

const addTodo = async (newTodo: {
  title: string;
  content: string;
  completed: boolean;
}) => {
  await axios.post(`${process.env.REACT_APP_JSON_SERVER_URL}/todos`, newTodo);
};

const toggleTodo = async ({
  id,
  completed,
}: {
  id: string;
  completed: boolean;
}) => {
  try {
    return await axios.patch(
      `${process.env.REACT_APP_JSON_SERVER_URL}/todos/${id}`,
      {
        completed,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = async (id: string) => {
  try {
    return await axios.delete(
      `${process.env.REACT_APP_JSON_SERVER_URL}/todos/${id}`
    );
  } catch (error) {
    console.log(error);
  }
};

export { getTodos, addTodo, toggleTodo, deleteTodo };
