import React from 'react'
import './delete-button.scss';
import { MdDelete } from 'react-icons/md'
import { Modal, notification } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../store/taskSlice';
const DeleteButton = ({ task, setSearchTask }) => {

  const dispatch = useDispatch();

  const deleteTaskFunction = () => {
    dispatch(deleteTask(task?.id));
    openNotification();
    setSearchTask('')
  }

  const confirmDelete = () => {
    Modal.confirm({
      title: 'Confirm Delete',
      icon: <ExclamationCircleOutlined size="25" color="#2988B4" />,
      content: 'Are you sure you want to delete this task?',
      okText: 'Delete',
      cancelText: 'Cancel',
      centered: true,
      onOk: () => {
        deleteTaskFunction();
      }
    });
  };


  const openNotification = () => {
    notification.success({
      message: 'Task Deleted Successfully',
      description: 'Task has been deleted successfully.',
      placement: 'bottomLeft',
    });
  };

  return (
    <div className="delete-button" onClick={confirmDelete}><MdDelete size="22" /></div>
  )
}

export default DeleteButton