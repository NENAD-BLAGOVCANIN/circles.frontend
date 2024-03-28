import React from 'react'

function TaskModal({ showTasksModal, setShowTasksModal, selectedTask, setSelectedTask, tasks, setTasks }) {

    const handleCloseTaskModal = () => {
        setShowTasksModal(false);
    };

    const changeTaskStatus = (status) => {
        const taskIndex = tasks.findIndex(task => task.id === selectedTask.id);
        if (taskIndex !== -1) {
            const updatedTasks = [...tasks];
            updatedTasks[taskIndex] = {
                ...updatedTasks[taskIndex],
                status: status
            };
            setTasks(updatedTasks);
        }
        setSelectedTask(prevTask => ({
            ...prevTask,
            status: status
        }));
    };

    return (
        <>
            <div className={`modal fade ${showTasksModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: 800, padding: '1.7rem' }}>
                    <div className="modal-content py-3 px-4 border-0 shadow-lg" style={{ maxHeight: 800, overflow: 'auto' }}>
                        <div className="modal-header pb-0 border-0 d-flex align-items-center">
                            <div>
                                <h4 className="modal-title bold m-0">{selectedTask.subject}</h4>
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

                            <p className='text-muted'>
                                {selectedTask.description}
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
    )
}

export default TaskModal