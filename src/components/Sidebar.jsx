import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCompass, faUsers, faAddressBook, faListCheck, faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    return (

        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>Bootstrap Sidebar</h3>
            </div>

            <ul className="list-unstyled py-4">
                <li className='nav-item'>
                    <a href="#" className='nav-link'>
                        <FontAwesomeIcon icon={faCompass} />
                        <span className='ps-3'>Dashboard</span>
                    </a>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link'>
                        <FontAwesomeIcon icon={faUsers} />
                        <span className='ps-3'>Team</span>
                    </a>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link'>
                        <FontAwesomeIcon icon={faAddressBook} />
                        <span className='ps-3'>Contacts</span>
                    </a>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link'>
                        <FontAwesomeIcon icon={faListCheck} />
                        <span className='ps-3'>Tasks</span>
                    </a>
                </li>

                <hr />

                <li className='nav-item'>
                    <a href="#" className='nav-link'>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        <span className='ps-3'>Logout</span>
                    </a>
                </li>
            </ul>

        </nav>
    )
}

export default Sidebar