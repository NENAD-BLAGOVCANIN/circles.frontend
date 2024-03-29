import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import placeholderProfileImage from '../assets/img/profile.svg'
import { assignTo } from '../api/tasks';

function UpdateAssigneeDropdown({ teamMembers, selectedTask, setSelectedTask, tasks, setTasks }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleAssignTask = async (user_id) => {
        try {
            const updatedTask = await assignTo(user_id, selectedTask.id);
            
            const taskIndex = tasks.findIndex(task => task.id === updatedTask.id);
            
            if (taskIndex !== -1) {
                const updatedTasks = [...tasks];
                updatedTasks[taskIndex] = updatedTask;
                
                setSelectedTask(updatedTask);
                
            } else {
                console.error('Updated task not found in tasks array');
            }
        } catch (error) {
            console.error('Error fetching:', error);
        }
    }

    return (
        <>
            <div className="dropdown">
                <button
                    className="btn btn-basic bg-gray shadow-sm"
                    onClick={toggleDropdown}
                >
                    <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                </button>
                {isOpen && (
                    <div className="dropdown-menu show p-3 border-0 shadow" aria-labelledby="dropdownMenuButton">
                        <div className='pb-3'>
                            <span className='pt-2 fw-500'>Assign to</span>
                        </div>
                        {teamMembers.map(teamMember => (
                            <li className='nav-item assignee-nav-item py-2 pe-4 pointer' key={teamMember.id} onClick={() => {handleAssignTask(teamMember.user.id)}}>
                                <img src={placeholderProfileImage} className='img-fluid rounded-circle' style={{ maxWidth: 35 }} alt="" />
                                <span className='ps-2'>
                                    {teamMember.user.name}
                                </span>
                            </li>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default UpdateAssigneeDropdown