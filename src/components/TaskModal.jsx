import React, { useState, useEffect, useRef } from 'react';
import { updateTask } from '../api/tasks';
import profileImagePlaceholder from '../assets/img/profile.svg'
import UpdateAssigneeDropdown from './UpdateAssigneeDropdown';

function TaskModal({ showTasksModal, setShowTasksModal, selectedTask, setSelectedTask, tasks, setTasks, teamMembers, setTeamMembers }) {
    const [editedTitle, setEditedTitle] = useState(selectedTask.subject);
    const [editedDescription, setEditedDescription] = useState(selectedTask.description);

    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    useEffect(() => {
        setEditedTitle(selectedTask.subject);
        setEditedDescription(selectedTask.description);
    }, [selectedTask]);

    const handleCloseTaskModal = () => {
        setShowTasksModal(false);
    };

    const handleTitleChange = () => {
        const caretPosition = titleRef.current.innerText.length;
        setEditedTitle(titleRef.current.innerText);
        setTimeout(() => {
            setCaretPosition(titleRef.current, caretPosition);
        }, 0);
    };

    const handleDescriptionChange = () => {
        const caretPosition = descriptionRef.current.innerText.length;
        setEditedDescription(descriptionRef.current.innerText);
        setTimeout(() => {
            setCaretPosition(descriptionRef.current, caretPosition);
        }, 0);
    };

    const setCaretPosition = (element, position) => {
        const range = document.createRange();
        const selection = window.getSelection();
        range.setStart(element.childNodes[0], position);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
    };

    const handleBlur = async () => {
        const updatedTask = {
            ...selectedTask,
            subject: editedTitle,
            description: editedDescription
        };

        await updateTask(updatedTask);

        setSelectedTask(updatedTask);

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
                                    <span ref={titleRef} contentEditable suppressContentEditableWarning onBlur={handleBlur} onInput={handleTitleChange} dir="ltr">{editedTitle}</span>
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
                                <span ref={descriptionRef} contentEditable suppressContentEditableWarning onBlur={handleBlur} onInput={handleDescriptionChange} dir="ltr">{editedDescription}</span>
                            </p>
                            <h5 className='mt-5'>Assignee</h5>
                            {selectedTask.assignee && (
                                <div className='d-flex align-items-center pt-2'>
                                    <img src={profileImagePlaceholder} className='rounded-circle' alt="" style={{ maxHeight: 35, height: '100%' }} />
                                    <span className='px-2'>{selectedTask.assignee.name}</span>
                                </div>
                            )}
                            <UpdateAssigneeDropdown teamMembers={teamMembers} />

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
