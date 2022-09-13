import React from 'react'
import './add-button.scss'
import { MdOutlineAdd } from 'react-icons/md'
const AddButton = ({addFunction}) => {
  return (
      <button className="addButton" onClick={addFunction}><MdOutlineAdd size={20} color="#fff"/>&nbsp;New Task</button>
  )
}

export default AddButton