import React from 'react'
import { useSelector } from 'react-redux'
import DeleteButton from '../DeleteButton/DeleteButton'
import EditButton from '../EditButton/EditButton'
import '../TodoItem/todo-item.scss'
const TodoItem = ({ title, description }) => {

  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={theme === "light" || theme === null ? "todo-item" : "todo-item-dark"}>
      <div className="left">
        <input type="checkbox" />
        <div className="todo-details-container">
          <h3>{title}</h3>
          <span>{description}</span>
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