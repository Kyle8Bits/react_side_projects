import React from "react";

interface TodoInputProps {
  actionAdd: Function;
  todoValue: string;
  setTodoValue: Function;
}

function TodoInput({ actionAdd, todoValue, setTodoValue }: TodoInputProps) {
  return (
    <div id="todo-input-container">
      <input
        placeholder="Add task here..."
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          if (todoValue !== "") {
            actionAdd(todoValue);
            setTodoValue("");
          }
        }}
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;
