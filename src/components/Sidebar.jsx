import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faAddressBook, faUser, faListCheck, faUserTie, faRightFromBracket, faBars, faChevronUp, faChevronDown, faGear } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getUserInfo } from '../api/user';

function Sidebar() {

    const [sidebarActive, setSidebarActive] = useState(false);
    const [currentPage, setCurrentPage] = useState(window.location.pathname);
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const fetchedUserInfo = await getUserInfo();
                setUserInfo(fetchedUserInfo);
            } catch (error) {
                console.error('Error fetching :', error);
            }
        };

        fetchUserInfo();
    }, []);


    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const toggleModal = () => {
        setSidebarActive(!sidebarActive);
    };

    return (

        <nav id="sidebar" className={sidebarActive ? 'active' : ''}>

            <div className="nav-item rounded card px-2">
                <div className='d-flex align-items-center justify-content-around'>
                    <div className='p-2 rounded bg-black'>
                        <FontAwesomeIcon icon={faUser} className='text-white px-1' />
                    </div>
                    {userInfo && (
                        <span className='px-2'>{userInfo.team.name}</span>
                    )}
                    <div className='p-2 d-flex flex-column align-items-center justify-content-center'>
                        <FontAwesomeIcon icon={faChevronUp} className='text-muted small' />
                        <FontAwesomeIcon icon={faChevronDown} className='text-muted small' />
                    </div>
                </div>

            </div>

            <ul className="list-unstyled py-4">
                <li className={`nav-item px-2 rounded ${currentPage === '/dashboard' ? 'active' : ''}`}>
                    <Link to="/dashboard" className='nav-link' onClick={() => handlePageChange('/dashboard')}>
                        <FontAwesomeIcon icon={faCompass} />
                        <span className='ps-3'>Dashboard</span>
                    </Link>
                </li>
                <li className={`nav-item px-2 rounded ${currentPage === '/contacts' ? 'active' : ''}`}>
                    <Link to="/contacts" className='nav-link' onClick={() => handlePageChange('/contacts')}>
                        <FontAwesomeIcon icon={faAddressBook} />
                        <span className='ps-3'>Contacts</span>
                    </Link>
                </li>
                <li className={`nav-item px-2 rounded ${currentPage === '/leads' ? 'active' : ''}`}>
                    <Link to="/leads" className='nav-link' onClick={() => handlePageChange('/leads')}>
                        <FontAwesomeIcon icon={faUserTie} />
                        <span className='ps-3'>Leads</span>
                    </Link>
                </li>
                <li className={`nav-item px-2 rounded ${currentPage === '/tasks' ? 'active' : ''}`}>
                    <Link to="/tasks" className='nav-link' onClick={() => handlePageChange('/tasks')}>
                        <FontAwesomeIcon icon={faListCheck} />
                        <span className='ps-3'>Tasks</span>
                    </Link>
                </li>
                <li className={`nav-item px-2 rounded ${currentPage === '/settings' ? 'active' : ''}`}>
                    <Link to="/settings" className='nav-link' onClick={() => handlePageChange('/settings')}>
                        <FontAwesomeIcon icon={faGear} />
                        <span className='ps-3'>Settings</span>
                    </Link>
                </li>

                <hr />

                <li className='nav-item px-2 rounded'>
                    <Link to="/logout" className='nav-link'>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        <span className='ps-3'>Logout</span>
                    </Link>
                </li>
            </ul>

            <div className='card w-fit position-fixed pointer' id='toggleModalButton' onClick={toggleModal}>
                <FontAwesomeIcon icon={faBars} />
            </div>

        </nav>
    )
}

export default Sidebar