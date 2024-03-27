import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { getLeads } from '../api/leads';
import AddLeadModal from '../components/AddLeadModal';

function Leads() {

    const [leads, setLeads] = useState([]);
    const [showAddLeadModal, setShowAddLeadModal] = useState(false);

    useEffect(() => {
        const fetchLeads = async () => {
            try {
                const fetchedLeads = await getLeads();
                setLeads(fetchedLeads);
            } catch (error) {
                console.error('Error fetching leads:', error);
            }
        };

        fetchLeads();
    }, []);

    const openAddLeadModal = () => {
        setShowAddLeadModal(true);
    };

    const columns = [
        { dataField: 'id', text: 'ID' },
        { dataField: 'name', text: 'Name', filter: textFilter() },
        { dataField: 'email', text: 'Email', filter: textFilter() },
        { dataField: 'title', text: 'Title' },
        { dataField: 'city', text: 'City' },
        { dataField: 'address', text: 'Address' },
        { dataField: 'description', text: 'Description' },
        { dataField: 'lead_source', text: 'Lead Source' },
        { dataField: 'past_client', text: 'Past Client' },
        { dataField: 'phone', text: 'Phone' },
        { dataField: 'organization', text: 'Organization' },
        { dataField: 'created_at', text: 'Date Added' }
    ];

    const data = leads.map(lead => ({
        id: lead.contact.id,
        name: lead.contact.name,
        email: lead.contact.email,
        title: lead.contact.title,
        city: lead.contact.city,
        address: lead.contact.address,
        description: lead.contact.description,
        lead_source: lead.contact.lead_source,
        past_client: lead.contact.past_client,
        phone: lead.contact.phone,
        organization: lead.contact.organization,
        created_at: lead.contact.created_at
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

                <Header pageTitle="Leads" />

                <div className='main-content-wrapper'>

                    <div className='d-flex justify-content-center pt-3 pb-4'>
                        <button className='btn btn-basic card shadow-sm' onClick={openAddLeadModal}><span className='text-primary'><FontAwesomeIcon icon={faPlus} className='pe-1' /> New Lead</span></button>
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

            <AddLeadModal 
                leads={leads}
                setLeads={setLeads}
                showAddLeadModal={showAddLeadModal}
                setShowAddLeadModal={setShowAddLeadModal}
            />

        </div>

    )
}

export default Leads