import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { getLeads } from '../api/leads';

function Leads() {

    const [leads, setLeads] = useState([]);

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

    return (
        <div className='main-content-wrapper'>

            <Sidebar />

            <div className='w-100 overflow-auto'>

                <Header pageTitle="Leads" />

                <div className='main-container'>

                    <div className='m-auto d-block w-100' style={{ maxWidth: 1500, overflowX: 'auto' }}>
                        <div className='table-responsive'>
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
                                    </tr>
                                </thead>
                                <tbody>
                                    {leads.map(lead => (
                                        <tr key={lead.contact.id}>
                                            <td>{lead.contact.id}</td>
                                            <td>{lead.contact.name}</td>
                                            <td>{lead.contact.email}</td>
                                            <td>{lead.contact.title}</td>
                                            <td>{lead.contact.city}</td>
                                            <td>{lead.contact.address}</td>
                                            <td>{lead.contact.description}</td>
                                            <td>{lead.contact.lead_source}</td>
                                            <td>{lead.contact.past_client}</td>
                                            <td>{lead.contact.phone}</td>
                                            <td>{lead.contact.organization}</td>
                                            <td>{lead.contact.created_at}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default Leads;
