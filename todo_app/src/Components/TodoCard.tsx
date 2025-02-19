import React from 'react'

interface TodoCardProps {
  id: number;
  taskName: String;
  number: number;
  deleteTask: Function;
  editTask: Function;
}

function TodoCard({ taskName, id , number, deleteTask, editTask}: TodoCardProps) {
  return (
    <div id='card-container'>
        <div id='task'>{number+1}. {taskName}</div>
        <i className="ri-edit-2-line" style={{ fontSize: '30px' }} onClick={() => editTask(number)}></i>
        <i className="ri-delete-bin-line" style={{ fontSize: '30px' }} onClick={() => deleteTask(id)}></i>
    </div>
  )
}

export default TodoCard