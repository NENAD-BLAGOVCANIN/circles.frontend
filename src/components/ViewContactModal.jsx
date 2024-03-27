import React from 'react'

function ViewContactModal({showViewContactModal, setShowViewContactModal, selectedContact, setSelectedContact}) {

    const handleCloseAddContactsModal = () => {
        setShowViewContactModal(false);
    };

    return (
        <>
            <div className={`modal fade ${showViewContactModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: 800, padding: '1.7rem' }}>
                    <div className="modal-content py-3 px-4 border-0 shadow-lg" style={{ maxHeight: 800, overflow: 'auto' }}>
                        <div className="modal-header pb-0 border-0 d-flex align-items-center">
                            <div>
                                <h4 className="modal-title bold m-0">{selectedContact.name}</h4>
                            </div>
                            <span type="button" className="close ms-auto m-0 text-secondary" onClick={handleCloseAddContactsModal} style={{ fontSize: '25pt', fontWeight: '100' }}>
                                <span aria-hidden="true">&times;</span>
                            </span>
                        </div>
                        <div className='modal-body'>

                            <p className='text-muted'>
                                {selectedContact.description}
                            </p>

                            <div className='row py-3'>
                                <div className='col-md-6 p-2'>
                                    <span className='fw-500'>Name: </span>
                                    <span>
                                        {selectedContact.name}
                                    </span>
                                </div>
                                <div className='col-md-6 p-2'>
                                    <span className='fw-500'>Email: </span>
                                    <span>
                                        {selectedContact.email}
                                    </span>
                                </div>
                                <div className='col-md-6 p-2'>
                                    <span className='fw-500'>City: </span>
                                    <span>
                                        {selectedContact.city}
                                    </span>
                                </div>
                                <div className='col-md-6 p-2'>
                                    <span className='fw-500'>Address: </span>
                                    <span>
                                        {selectedContact.address}
                                    </span>
                                </div>
                                <div className='col-md-6 p-2'>
                                    <span className='fw-500'>Organization: </span>
                                    <span>
                                        {selectedContact.organization}
                                    </span>
                                </div>
                                <div className='col-md-6 p-2'>
                                    <span className='fw-500'>Past client: </span>
                                    <span>
                                        {selectedContact.pastClient ? selectedContact.pastClient : 'No'}
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewContactModal