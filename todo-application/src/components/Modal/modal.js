import React, { useState } from 'react'
import { Modal } from 'antd';
import './modal.scss'
import { useDispatch } from "react-redux";
import { v4 as uuid } from 'uuid';
import { addTask } from '../../components/store/taskSlice'
import { Input, Form } from 'antd';
const { TextArea } = Input;

const TaskModal = ({ type, isOpen, setOpenModal }) => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onSubmit = (e) => {
    
    e.preventDefault();
    if (type === "add") {
      dispatch(addTask({
        id: uuid(),
        task: task,
        time: new Date().toLocaleString()
      }));
      setOpenModal(false);
      
    }
  
  }

  const onCancelModal = () => {
    setOpenModal(false);
    
  }

  const handleMessageChange = event => {
    setTask(event.target.value);
  };


  return (
    <Modal
      title={type === "add" ? "Add Task" : "Update Task"}
      centered
      open={isOpen}
      onOk={onSubmit}
      afterClose={()=>form.resetFields()}
      onCancel={onCancelModal}
      maskClosable={false}
      destroyOnClose={true}
      footer={<div className="modal-footer">
        <button className='cancel-button' onClick={onCancelModal}>Cancel</button>
        <button className={task === '' ? 'submit-button-disabled' : 'submit-button'} onClick={onSubmit} disabled={task === '' ? true : false}>Submit</button>
      </div>}
    >
      <Form form={form} onFinish={onSubmit} className="formContainer" >

        <Form.Item name='task'

          rules={[{ required: true, message: <span className='errorMessage'>Task cannot be empty!</span> }]}>
          <TextArea
            value={task}
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