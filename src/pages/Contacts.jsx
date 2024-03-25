import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Contacts() {

    const columns = [
        { dataField: 'name', text: 'Name', filter: textFilter() },
        { dataField: 'position', text: 'Position', filter: textFilter() },
        { dataField: 'office', text: 'Office', filter: textFilter() },
        { dataField: 'age', text: 'Age', filter: textFilter() },
        { dataField: 'start_date', text: 'Start Date', filter: textFilter() },
        { dataField: 'salary', text: 'Salary', filter: textFilter() }
    ];

    const data = [
        { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
        { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
        { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
        { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
        { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
        { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
        { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
        { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
        { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
        { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
        { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
        { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
        { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
        { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
        { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
        { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
        { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '$320,800' },
    ];

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
                        <button className='btn btn-basic card shadow-sm'><span className='text-primary'><FontAwesomeIcon icon={faPlus} className='pe-1' /> New Contact</span></button>
                    </div>

                    <BootstrapTable
                        keyField='name'
                        data={data}
                        columns={columns}
                        classes='table-striped table-hover'
                        filter={filterFactory()}
                        pagination={paginationFactory(options)}
                    />

                </div>
            </div>


        </div>
    )
}

export default Contacts