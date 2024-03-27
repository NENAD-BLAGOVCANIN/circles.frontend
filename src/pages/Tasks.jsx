import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { getTasks } from '../api/tasks'

function Tasks() {


    const [tasks, setTasks] = useState([]);

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
                                <div className="card mb-3">
                                    <div className=''>
                                        <h4 className='pe-2'>{task.subject}</h4>
                                        <span className='text-muted'>{task.description}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-4 p-3">
                            <div className='bg-dark rounded text-white text-center mb-3 py-2'>
                                IN PROGRESS
                            </div>
                            {tasks.filter(task => task.status === 'in_progress').map(task => (
                                <div className="card mb-3">
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
                                <div className="card mb-3">
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


        </div>
    )
}

export default Tasks