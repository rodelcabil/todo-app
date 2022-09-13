import React from 'react'
import DeleteButton from '../DeleteButton/DeleteButton'
import EditButton from '../EditButton/EditButton'
import '../TodoItem/todo-item.scss'
const TodoItem = ({ title, description }) => {
  return (
    <div className="todo-item">
      <div className="left">
        <input type="checkbox" />
        <div className="todo-details-container">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="right">
        <DeleteButton/>
        <EditButton/>
      </div>
    </div>
  )
}

export default TodoItem