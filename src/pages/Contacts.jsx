import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { getContacts } from '../api/contacts';
import AddContactModal from '../components/AddContactModal';

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

    const columns = [
        { dataField: 'id', text: 'ID', filter: textFilter() },
        { dataField: 'name', text: 'Name', filter: textFilter() },
        { dataField: 'email', text: 'Email', filter: textFilter() },
        { dataField: 'title', text: 'Title', filter: textFilter() },
        { dataField: 'city', text: 'City', filter: textFilter() },
        { dataField: 'address', text: 'Address', filter: textFilter() },
        { dataField: 'description', text: 'Description', filter: textFilter() },
        { dataField: 'lead_source', text: 'Lead Source', filter: textFilter() },
        { dataField: 'past_client', text: 'Past Client', filter: textFilter() },
        { dataField: 'phone', text: 'Phone', filter: textFilter() },
        { dataField: 'organization', text: 'Organization', filter: textFilter() },
        { dataField: 'created_at', text: 'Date Added', filter: textFilter() }
    ];

    const data = contacts.map(contact => ({
        id: contact.id,
        name: contact.name,
        email: contact.email,
        title: contact.title,
        city: contact.city,
        address: contact.address,
        description: contact.description,
        lead_source: contact.lead_source,
        past_client: contact.past_client,
        phone: contact.phone,
        organization: contact.organization,
        created_at: contact.created_at
    }));

    const options = {
        paginationSize: 10,
        pageStartIndex: 1,
        sizePerPage: 10,
        hideSizePerPage: true,
        hidePageListOnlyOnePage: true
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

                    <div className='m-auto d-block w-100' style={{ maxWidth: 1500, overflow: 'auto' }}>
                        <BootstrapTable
                            keyField='id'
                            data={data}
                            columns={columns}
                            classes='table-striped table-hover table-responsive'
                            filter={filterFactory()}
                            pagination={paginationFactory(options)}
                        />
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

export default Contacts