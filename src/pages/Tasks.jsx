import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { getTasks } from '../api/tasks'
import TaskModal from '../components/TaskModal'

function Tasks() {


    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState([]);
    const [showTasksModal, setShowTasksModal] = useState(false);
    const [showAddTaskCard, setShowAddTaskCard] = useState(false);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const fetchedTasks = await getTasks();
                setTasks(fetchedTasks);
            } catch (error) {
                console.error('Error fetching :', error);
            }
        };

        fetchTasks();
    }, []);

    const handleShowTaskModal = (task) => {
        setSelectedTask(task);
        setShowTasksModal(true);
    }

    const handleShowAddTaskCard = () => {
        setShowAddTaskCard(true);
    }

    const handleHideAddTaskCard = () => {
        setShowAddTaskCard(false);
    }

    return (
        <div className='main-content-wrapper'>

            <Sidebar />

            <div className='w-100 overflow-auto'>

                <Header pageTitle="Tasks" />

                <div className='main-container'>

                    <div className="row">
                        <div className="col-4 p-3">
                            <div className='bg-dark rounded text-white text-center mb-3 py-2'>
                                TODO
                            </div>
                            {tasks.filter(task => task.status === 'todo').map(task => (
                                <div className="task-card card mb-3" onClick={() => handleShowTaskModal(task)}>
                                    <div className=''>
                                        <h4 className='pe-2'>{task.subject}</h4>
                                        <span className='text-muted'>{task.description}</span>
                                    </div>
                                </div>
                            ))}

                            <div className={`task-card card mb-3 ${showAddTaskCard ? '' : 'd-none'}`}>
                                <div className=''>
                                    <input type="text" className='form-control bg-gray mb-2' placeholder='Subject' />
                                    <textarea className='form-control bg-gray mb-2' placeholder='Description' />
                                    <div className='d-flex justify-content-end w-100'>
                                        <div className='pe-1'>
                                            <button className='btn btn-basic border' onClick={handleHideAddTaskCard}>Dismiss</button>
                                        </div>
                                        <div className='ps-1'>
                                            <button className='btn btn-primary'>Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className='btn btn-dark py-2 rounded w-100' onClick={handleShowAddTaskCard}>
                                Add Task
                            </button>

                        </div>
                        <div className="col-4 p-3">
                            <div className='bg-dark rounded text-white text-center mb-3 py-2'>
                                IN PROGRESS
                            </div>
                            {tasks.filter(task => task.status === 'in_progress').map(task => (
                                <div className="task-card card mb-3" onClick={() => handleShowTaskModal(task)}>
                                    <div className=''>
                                        <h4 className='pe-2'>{task.subject}</h4>
                                        <span className='text-muted'>{task.description}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-4 p-3">
                            <div className='bg-dark rounded text-white text-center mb-3 py-2'>
                                DONE
                            </div>
                            {tasks.filter(task => task.status === 'done').map(task => (
                                <div className="task-card card mb-3" onClick={() => handleShowTaskModal(task)}>
                                    <div className=''>
                                        <h4 className='pe-2'>{task.subject}</h4>
                                        <span className='text-muted'>{task.description}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>


            <TaskModal
                showTasksModal={showTasksModal}
                setShowTasksModal={setShowTasksModal}
                selectedTask={selectedTask}
                setSelectedTask={setSelectedTask}
            />


        </div>
    )
}

export default Tasks