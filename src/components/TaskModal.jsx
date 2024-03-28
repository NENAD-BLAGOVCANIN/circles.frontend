import React, { useState, useEffect } from 'react';
import { updateTask } from '../api/tasks';

function TaskModal({ showTasksModal, setShowTasksModal, selectedTask, setSelectedTask, tasks, setTasks }) {
    const [editedTitle, setEditedTitle] = useState(selectedTask.subject);
    const [editedDescription, setEditedDescription] = useState(selectedTask.description);

    useEffect(() => {
        setEditedTitle(selectedTask.subject);
        setEditedDescription(selectedTask.description);
    }, [selectedTask]);

    const handleCloseTaskModal = () => {
        setShowTasksModal(false);
    };

    const handleTitleChange = (event) => {
        setEditedTitle(event.target.textContent);
    };

    const handleDescriptionChange = (event) => {
        setEditedDescription(event.target.textContent);
    };

    const handleBlur = async () => {
        const updatedTask = {
            ...selectedTask,
            subject: editedTitle,
            description: editedDescription
        };

        const response = await updateTask(updatedTask);
        
        setSelectedTask(updatedTask);

        console.log(updateTask);

        const updatedTasks = tasks.map(task => {
            if (task.id === updatedTask.id) {
                return updatedTask;
            }
            return task;
        });
        setTasks(updatedTasks);

    };

    const changeTaskStatus = async (status) => {
        const taskIndex = tasks.findIndex((task) => task.id === selectedTask.id);
        if (taskIndex !== -1) {
            const updatedTasks = [...tasks];
            updatedTasks[taskIndex] = {
                ...updatedTasks[taskIndex],
                status: status
            };
            setTasks(updatedTasks);
        }

        const updatedTask = {
            ...selectedTask,
            status: status
        };

        const response = await updateTask(updatedTask);

        if (response.ok) {
            setSelectedTask(updatedTask);
        }
    };

    return (
        <>
            <div className={`modal fade ${showTasksModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: 800, padding: '1.7rem' }}>
                    <div className="modal-content py-3 px-4 border-0 shadow-lg" style={{ maxHeight: 800, overflow: 'auto' }}>
                        <div className="modal-header pb-0 border-0 d-flex align-items-center">
                            <div>
                                <h4 className="modal-title bold m-0" onBlur={handleBlur}>
                                    <span contentEditable suppressContentEditableWarning onBlur={handleBlur} onInput={handleTitleChange}>{editedTitle}</span>
                                </h4>
                                <span className='small text-muted'>
                                    In list <u>{selectedTask.status}</u>
                                </span>
                            </div>
                            <span type="button" className="close ms-auto m-0 text-secondary" onClick={handleCloseTaskModal} style={{ fontSize: '25pt', fontWeight: '100' }}>
                                <span aria-hidden="true">&times;</span>
                            </span>
                        </div>
                        <div className='modal-body py-5'>
                            <h5>Description</h5>
                            <p className='text-muted' onBlur={handleBlur}>
                                <span contentEditable suppressContentEditableWarning onBlur={handleBlur} onInput={handleDescriptionChange}>{editedDescription}</span>
                            </p>
                            <h5 className='mt-5'>Assigned to</h5>
                        </div>
                        <div className='modal-footer border-0'>
                            <div className='px-1'>
                                <button className='btn btn-basic border' onClick={() => { changeTaskStatus('todo') }}>Move to <span className='text-info'>Todo</span></button>
                            </div>
                            <div className='px-1'>
                                <button className='btn btn-basic border' onClick={() => { changeTaskStatus('in_progress') }}>Move to <span className='text-warning'>In progress</span></button>
                            </div>
                            <div className='px-1'>
                                <button className='btn btn-basic border' onClick={() => { changeTaskStatus('done') }}>Move to <span className='text-success'>Done</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TaskModal;
