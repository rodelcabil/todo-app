import React from 'react'
import './delete-button.scss';
import { MdDelete } from 'react-icons/md'
const DeleteButton = () => {
  return (
      <div className="delete-button"><MdDelete size="22" /></div>
  )
}

export default DeleteButton