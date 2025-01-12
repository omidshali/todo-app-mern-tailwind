import { useState } from "react";
interface addTodoProps {
  addTodo: (title: string) => void;
  inputTitle: string;
  setInputTitle: (title: string) => void;
}
export const AddTodo = (props: addTodoProps) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={props.inputTitle}
        onChange={(e) => props.setInputTitle(e.target.value)}
        className="border p-2 mr-2"
      />
      <button
        onClick={() => props.addTodo(props.inputTitle)}
        className="bg-blue-500 text-white p-2"
      >
        Add Todo
      </button>
    </div>
  );
};
