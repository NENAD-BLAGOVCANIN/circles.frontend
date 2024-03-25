import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';

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
    ];

    const options = {
        paginationSize: 5,
        pageStartIndex: 1,
        sizePerPage: 5,
        hideSizePerPage: true,
        hidePageListOnlyOnePage: true
    };

    return (
        <div className='d-flex position-relative'>

            <Sidebar />

            <div className='w-100'>

                <Header pageTitle="Contacts" />

                <div className='main-content-wrapper'>

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