import React, { useState } from 'react'
import './add-button.scss'
import { MdOutlineAdd } from 'react-icons/md'
import TaskModal from '../Modal/modal'
const AddButton = () => {

  const [openModal, setOpenModal] = useState(false);
  const openModalFunction = () =>{
    setOpenModal(!openModal);
  }
  
  return (
    <>
      <button className="addButton" onClick={openModalFunction}><MdOutlineAdd size={20} color="#fff" /><span>New Task</span></button>
      <TaskModal type="add" isOpen={openModal} onCancel={openModalFunction} />
    </>
  )
}

export default AddButton