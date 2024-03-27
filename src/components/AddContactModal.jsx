import React from 'react'

function AddContactModal({ setContacts, showAddContactsModal, setShowAddContactsModal }) {

    const handleCloseAddContactsModal = () => {
        setShowAddContactsModal(false);
    };

    return (
        <>

            <div className={`modal fade ${showAddContactsModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: 800, padding: '1.7rem' }}>
                    <div className="modal-content py-3 px-4 border-0 shadow-lg" style={{ maxHeight: 800, overflow: 'auto' }}>
                        <div className="modal-header pb-0 border-0 d-flex align-items-center">
                            <div>
                                <h4 className="modal-title bold m-0">Add Contact</h4>
                            </div>
                            <span type="button" className="close ms-auto m-0 text-secondary" onClick={handleCloseAddContactsModal} style={{ fontSize: '25pt', fontWeight: '100' }}>
                                <span aria-hidden="true">&times;</span>
                            </span>
                        </div>
                        <div className='modal-body'>
                            <div className='row'>

                                <div className='col-md-6 p-2'>
                                    <input type="text" className='form-control' placeholder='Name' />
                                </div>
                                <div className='col-md-6 p-2'>
                                    <input type="text" className='form-control' placeholder='Email' />
                                </div>
                                <div className='col-md-6 p-2'>
                                    <input type="text" className='form-control' placeholder='Title' />
                                </div>
                                <div className='col-md-6 p-2'>
                                    <input type="text" className='form-control' placeholder='City' />
                                </div>
                                <div className='col-md-6 p-2'>
                                    <input type="text" className='form-control' placeholder='Address' />
                                </div>
                                <div className='col-md-6 p-2'>
                                    <input type="text" className='form-control' placeholder='Organization' />
                                </div>
                                <div className='col-md-12 p-2'>
                                    <textarea type="text" className='form-control' placeholder='Description' />
                                </div>

                                <div className='col-md-6 p-2'>
                                    <input type="checkbox" className='form-check-input text-muted' /> <label className='form-check-label text-muted'>Past Client</label>
                                </div>
                            </div>

                        </div>
                        <div className='modal-footer border-0'>
                            <button className='btn btn-primary rounded'>Save</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddContactModal