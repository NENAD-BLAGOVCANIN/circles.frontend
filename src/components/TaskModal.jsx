import React from 'react'

function TaskModal({ showTasksModal, setShowTasksModal, selectedTask, setSelectedTask }) {

    const handleCloseTaskModal = () => {
        setShowTasksModal(false);
    };

    return (
        <>
            <div className={`modal fade ${showTasksModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: 800, padding: '1.7rem' }}>
                    <div className="modal-content py-3 px-4 border-0 shadow-lg" style={{ maxHeight: 800, overflow: 'auto' }}>
                        <div className="modal-header pb-0 border-0 d-flex align-items-center">
                            <div>
                                <h4 className="modal-title bold m-0">{selectedTask.subject}</h4>
                            </div>
                            <span type="button" className="close ms-auto m-0 text-secondary" onClick={handleCloseTaskModal} style={{ fontSize: '25pt', fontWeight: '100' }}>
                                <span aria-hidden="true">&times;</span>
                            </span>
                        </div>
                        <div className='modal-body'>

                            <p className='text-muted'>
                                {selectedTask.description}
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskModal