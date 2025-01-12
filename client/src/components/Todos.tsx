import React, { useEffect, useState } from "react";
import axios from "axios";
import { TodoList } from "./TodoList";
import { AddTodo } from "./AddTodo";

interface Todo {
  id: string;
  title: string;
  isComplated: boolean;
}
const url = "http://127.0.0.1:3001/api/todo/";
const Todos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputTitle, setInputTitle] = useState<string>("");

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const fetchedTodos = response.data.data.map((todo: any) => ({
          id: todo._id,
          title: todo.title,
          isComplated: todo.isComplated,
        }));
        setTodos(fetchedTodos);
      })
      .catch((error) => {
        console.error("There was an error fetching the todos!", error);
      });
  }, []);

  const addTodo = (title: string) => {
    if (title.trim() === "") return;
    const newTodoItem = {
      title: title,
    };
    axios
      .post(url, newTodoItem)
      .then((response) => {
        setTodos(() => [
          ...todos,
          { ...response.data.data, id: response.data.data._id },
        ]);
        setInputTitle("");
      })
      .catch((error) => {
        console.log("There was an error adding the todo!", error);
      });
  };

  const toggleTodo = (todo: Todo) => {
    axios.put(`${url}${todo.id}`, todo).then(() => {});
    setTodos(todos.map((t) => (t.id == todo.id ? todo : t)));
  };

  const deleteTodo = (id: string) => {
    axios
      .delete(`${url}${id}`)
      .then(() => {
        setTodos(todos.filter((todo) => todo.id != id));
      })
      .catch((error) => {
        console.log("There was an error deleting the todo!", error.message);
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <AddTodo
        addTodo={addTodo}
        inputTitle={inputTitle}
        setInputTitle={setInputTitle}
      />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
};

export default Todos;
