import React, { useState, useEffect, useRef } from 'react';
import { updateTask } from '../api/tasks';
import profileImagePlaceholder from '../assets/img/profile.svg';
import UpdateAssigneeDropdown from './UpdateAssigneeDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faListCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';

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
        const caretPosition = window.getSelection().getRangeAt(0).startOffset;
        setEditedTitle(titleRef.current.innerText);
        setTimeout(() => {
            setCaretPosition(titleRef.current, caretPosition);
        }, 0);
    };

    const handleDescriptionChange = () => {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const caretPosition = range.startOffset;
        setEditedDescription(descriptionRef.current.innerText);
        setTimeout(() => {
            setCaretPosition(descriptionRef.current, caretPosition);
        }, 0);
    };
    
    
    const setCaretPosition = (element, position) => {
        const range = document.createRange();
        const selection = window.getSelection();
    
        if (element.childNodes.length > 0) {
            range.setStart(element.childNodes[0], Math.min(position, element.textContent.length));
        } else {
            range.setStart(element, Math.min(position, element.textContent.length));
        }
    
        range.collapse(true);
    
        selection.removeAllRanges();
        selection.addRange(range);
    };

    const handleBlur = async () => {
        if (editedTitle.trim() === '') {
            return;
        }
    
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
                    <div className="modal-content py-3 px-4 border-0 shadow-lg" style={{ maxHeight: 900, overflow: 'auto' }}>
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
                            <div className='form-control rounded w-100 py-2' ref={descriptionRef} contentEditable suppressContentEditableWarning onBlur={handleBlur} onInput={handleDescriptionChange} dir="ltr">{editedDescription}</div>

                            <div className='d-flex align-items-center mt-5'>
                                <h5 className='mb-0 pe-3'>Assignee</h5>
                                <UpdateAssigneeDropdown teamMembers={teamMembers} selectedTask={selectedTask} setSelectedTask={setSelectedTask} tasks={tasks} setTasks={setTasks} />
                            </div>

                            {selectedTask.assignee && (
                                <div className='d-flex align-items-center pt-3'>
                                    <img src={profileImagePlaceholder} className='rounded-circle' alt="" style={{ maxHeight: 35, height: '100%' }} />
                                    <span className='px-2'>{selectedTask.assignee.name}</span>
                                </div>
                            )}

                        </div>
                        <div className='modal-footer border-0'>
                            <div className='px-1'>
                                <button className='btn btn-basic border d-flex' onClick={() => { changeTaskStatus('todo') }}>
                                    Move to 
                                    <span className='d-flex align-items-center text-info ps-2'> Todo <FontAwesomeIcon className='ps-2' icon={faListCheck} /></span>
                                </button>
                            </div>
                            <div className='px-1'>
                                <button className='btn btn-basic border d-flex' onClick={() => { changeTaskStatus('in_progress') }}>
                                    Move to 
                                    <span className='d-flex align-items-center text-warning ps-2'> In progress <FontAwesomeIcon className='ps-2' icon={faSpinner} /></span>
                                </button>
                            </div>
                            <div className='px-1'>
                                <button className='btn btn-basic border d-flex' onClick={() => { changeTaskStatus('done') }}>
                                    Mark as
                                    <span className='d-flex align-items-center text-success ps-2'> Done <FontAwesomeIcon className='ps-2' icon={faCircleCheck} /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TaskModal;
