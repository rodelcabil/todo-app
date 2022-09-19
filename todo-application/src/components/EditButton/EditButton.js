import React, { useState } from 'react'
import './edit-button.scss';
import { MdModeEdit } from 'react-icons/md'
import TaskModal from '../Modal/modal';

const EditButton = ({ task }) => {

    const [openModal, setOpenModal] = useState(false);

    const openModalFunction = () => {
        setOpenModal(!openModal);
    }



    return (
        <>
            <div className="edit-button" onClick={openModalFunction}><MdModeEdit size="22" /></div>
            <TaskModal type="update" isOpen={openModal} onCancel={openModalFunction} task={task} />
        </>

    )
}

export default EditButton