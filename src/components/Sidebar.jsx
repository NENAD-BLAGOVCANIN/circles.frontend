import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faUsers, faAddressBook, faListCheck, faUser, faRightFromBracket, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/img/logo.png';

function Sidebar() {

    const [sidebarActive, setSidebarActive] = useState(false);
    const [currentPage, setCurrentPage] = useState(window.location.pathname);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const toggleModal = () => {
        setSidebarActive(!sidebarActive);
    };

    return (

        <nav id="sidebar" className={sidebarActive ? 'active' : ''}>

            <div className="px-3">
                <img src={logo} alt="" style={{ maxWidth: 55, width: '100%' }} />
            </div>

            <ul className="list-unstyled py-4">
                <li className={`nav-item px-2 rounded ${currentPage === '/dashboard' ? 'active' : ''}`}>
                    <a href="/dashboard" className='nav-link' onClick={() => handlePageChange('/dashboard')}>
                        <FontAwesomeIcon icon={faCompass} />
                        <span className='ps-3'>Dashboard</span>
                    </a>
                </li>
                <li className={`nav-item px-2 rounded ${currentPage === '/team' ? 'active' : ''}`}>
                    <a href="/team" className='nav-link' onClick={() => handlePageChange('/team')}>
                        <FontAwesomeIcon icon={faUsers} />
                        <span className='ps-3'>Team</span>
                    </a>
                </li>
                <li className={`nav-item px-2 rounded ${currentPage === '/contacts' ? 'active' : ''}`}>
                    <a href="/contacts" className='nav-link' onClick={() => handlePageChange('/contacts')}>
                        <FontAwesomeIcon icon={faAddressBook} />
                        <span className='ps-3'>Contacts</span>
                    </a>
                </li>
                <li className={`nav-item px-2 rounded ${currentPage === '/tasks' ? 'active' : ''}`}>
                    <a href="/tasks" className='nav-link' onClick={() => handlePageChange('/tasks')}>
                        <FontAwesomeIcon icon={faListCheck} />
                        <span className='ps-3'>Tasks</span>
                    </a>
                </li>

                <hr />

                <li className='nav-item px-2 rounded'>
                    <a href="/logout" className='nav-link'>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        <span className='ps-3'>Logout</span>
                    </a>
                </li>
            </ul>

            <div className='card w-fit position-fixed pointer' id='toggleModalButton' onClick={toggleModal}>
                <FontAwesomeIcon icon={faBars} />
            </div>

        </nav>
    )
}

export default Sidebar