import React, { useState } from 'react'
import { Modal } from 'antd';
import './modal.scss'
import { useDispatch } from "react-redux";
import { v4 as uuid } from 'uuid';
import { addTask, updateTask } from '../../components/store/taskSlice'
import { Input, Form , notification} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const TaskModal = ({ type, isOpen, onCancel, task }) => {

  const [taskInput, setTask] = useState('');
  const [status, setStatus] = useState('Incomplete');
  const dispatch = useDispatch();
  const [form] = Form.useForm();



  const confirmModal = (e) => {
    Modal.confirm({
      title: type === 'add' ? 'Confirm Add' : 'Confirm Update',
      icon: <ExclamationCircleOutlined size="25" color="#2988B4" />,
      content: type === 'add' ? 'Are you sure you want to add this task?' : 'Are you sure you want to update this task?',
      okText: type === 'add' ? 'Add' : 'Update',
      cancelText: 'Cancel',
      centered: true,
      onOk: ()=> onSubmit(e)

    });
  };
  
  const onSubmit = (e) => {
    
    e.preventDefault();
    if (type === "add") {
      dispatch(addTask({
        id: uuid(),
        task: taskInput,
        status: status,
        time: new Date().toLocaleString()
      }));
      onCancel();
      openNotification()
    }
    if (type === "update") {
      dispatch(updateTask({
       
        id: task?.id,
        task: taskInput,
        status: status,
      }));
      onCancel();
      openNotification();
    }
  }


  const handleMessageChange = event => {
    setTask(event.target.value);
  };

  const openNotification = () => {
    notification.success({
      message: type === 'add' ? `Task Added Successfully` : `Task Updated Successfully`,
      description: type === 'add' ? 'Task has been added successfully.' : `Task has been updated successfully.`,
      placement: 'bottomLeft',
    });
  };


  
  return (
    <Modal
      title={type === "add" ? "Add Task" : "Update Task" }
      centered
      open={isOpen}
      onOk={confirmModal}
      afterClose={()=>form.resetFields()}
      onCancel={onCancel}
      maskClosable={false}
      destroyOnClose={true}
      footer={<div className="modal-footer" >
        <button className='cancel-button' onClick={onCancel}>Cancel</button>
        <button className={taskInput === '' ? 'submit-button-disabled' : 'submit-button'} disabled={taskInput === '' ? true : false} onClick={confirmModal} >Submit</button>
      </div>}
    >
      <Form form={form} onFinish={confirmModal} className="formContainer" >
        <Form.Item name='task'
          initialValue={task?.task}
          rules={[{ required: true, message: <span className='errorMessage'>Task cannot be empty!</span> }]}>
          <TextArea
            value={taskInput}
            // defaultValue={task.task}
            onChange={handleMessageChange}
            placeholder="Write your task here"
            style={{ border: 'none', boxShadow: 'none', margin: 0, padding: 0 }}
            className="textarea"
            autoSize={{
              minRows: 6,
              maxRows: 6,
            }}
          />
        </Form.Item>

      </Form>
    </Modal>
  )
}

export default TaskModal