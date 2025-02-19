import TodoCard from './TodoCard'

export interface Todo {
  id: number;
  task: string;
}

interface TodoListProps {
  list: Todo[];
  actionDelete: Function;
  actionEdit: Function;
}

function TodoList( {list, actionDelete, actionEdit}: TodoListProps) {
  return (
    <div>
      {list.map((todo, index) => {
        return <TodoCard taskName ={todo.task} number={index} id={todo.id} deleteTask={actionDelete} editTask = {actionEdit}/>
      })}
    </div>
  )
}

export default TodoList