import React from 'react'
import { useSelector } from 'react-redux'
import DeleteButton from '../DeleteButton/DeleteButton'
import EditButton from '../EditButton/EditButton'
import '../TodoItem/todo-item.scss'
import moment from 'moment'
const TodoItem = ({ title, time, task }) => {

  const theme = useSelector((state) => state.theme.theme);
  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <>
      <div className={theme === "light" || theme === null ? "todo-item" : "todo-item-dark"}>
        <div className="left">
          {/* <input type="checkbox" /> */}
          <div className={theme === "light" || theme === null ? "todo-details-container": "todo-details-container-dark"}>
            <h3>{Capitalize(title)}</h3>
            <span>{moment(time).fromNow()}</span>
          </div>
        </div>
        <div className="right">
          <DeleteButton task={task}/>
          <EditButton task={task} />
        </div>
      </div>
     
    </>
  )
}

export default TodoItem