import { useEffect, useState } from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import "./index.css";
import { Todo } from "./Components/TodoList";
function App() {
  let todo = [
    { id: 1, task: "Wake up" },
    { id: 2, task: "Taking shower" },
    { id: 3, task: "Do excercise" },
  ];

  const [todoList, setTodo] = useState(todo);
  const [toDoToEdit, setTodoToEdit] = useState("");

  function saveData(newList: Todo[]) {
    localStorage.setItem("todoList", JSON.stringify({ todoList: newList }));
  }

  function addTask(task: string) {
    const newTask = {
      id: todoList.length + 1,
      task: task,
    };
    saveData([...todoList, newTask]);
    setTodo([...todoList, newTask]);
  }

  function deleteTask(id: number) {
    const newList = todoList.filter((todo) => todo.id !== id);
    saveData(newList);
    setTodo(newList);
  }

  function editTask(index: number) {
    const valuetoEdit = todo[index];
    setTodoToEdit(valuetoEdit.task);
    deleteTask(valuetoEdit.id);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodo = localStorage.getItem("todoList");

    if (!localTodo) {
      return;
    }

    const parseTodo: Todo[] = JSON.parse(localTodo).todoList;
    setTodo(parseTodo);
  }, []);

  return (
    <>
      <TodoInput
        todoValue={toDoToEdit}
        setTodoValue={setTodoToEdit}
        actionAdd={addTask}
      />
      <TodoList
        list={todoList}
        actionDelete={deleteTask}
        actionEdit={editTask}
      />
    </>
  );
}

export default App;
