import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { getContacts } from '../api/contacts';
import AddContactModal from '../components/AddContactModal';
import { deleteContact } from '../api/contacts';

function Contacts() {

    const [contacts, setContacts] = useState([]);
    const [showAddContactsModal, setShowAddContactsModal] = useState(false);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const fetchedContacts = await getContacts();
                setContacts(fetchedContacts);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        fetchContacts();
    }, []);

    const openAddContactModal = () => {
        setShowAddContactsModal(true);
    };

    const handleDeleteContact = async (contact_id) => {
        try {
            await deleteContact(contact_id);
            const updatedContacts = contacts.filter(contact => contact.id !== contact_id);
            setContacts(updatedContacts);
        } catch (error) {
            console.error('Error deleting contact:', error);
        }
    };
    

    return (
        <div className='d-flex position-relative'>

            <Sidebar />

            <div className='w-100'>

                <Header pageTitle="Contacts" />

                <div className='main-content-wrapper'>

                    <div className='d-flex justify-content-center pt-3 pb-4'>
                        <button className='btn btn-basic card shadow-sm' onClick={openAddContactModal}><span className='text-primary'><FontAwesomeIcon icon={faPlus} className='pe-1' /> New Contact</span></button>
                    </div>

                    <div className='table-responsive m-auto d-block w-100 table-responsive' style={{ maxWidth: 1500 }}>
                        <table className='table table-striped table-hover'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Title</th>
                                    <th>City</th>
                                    <th>Address</th>
                                    <th>Description</th>
                                    <th>Lead Source</th>
                                    <th>Past Client</th>
                                    <th>Phone</th>
                                    <th>Organization</th>
                                    <th>Date Added</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map(contact => (
                                    <tr key={contact.id}>
                                        <td>{contact.id}</td>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.title}</td>
                                        <td>{contact.city}</td>
                                        <td>{contact.address}</td>
                                        <td>{contact.description}</td>
                                        <td>{contact.lead_source}</td>
                                        <td>{contact.past_client}</td>
                                        <td>{contact.phone}</td>
                                        <td>{contact.organization}</td>
                                        <td>{contact.created_at}</td>
                                        <td>
                                            <div className="h-100 d-flex align-items-center justify-content-center">
                                                <button className='btn btn-basic bg-gray text-danger' onClick={() => handleDeleteContact(contact.id)}>
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <AddContactModal
                contacts={contacts}
                setContacts={setContacts}
                showAddContactsModal={showAddContactsModal}
                setShowAddContactsModal={setShowAddContactsModal}
            />

        </div>

    )
}

export default Contacts;
