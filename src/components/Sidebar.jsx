import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faAddressBook, faUser, faListCheck, faUserTie, faRightFromBracket, faBars, faChevronUp, faChevronDown, faGear, faPlus, faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getUserInfo } from '../api/user';
import { getMyTeams, switchTeam } from '../api/team';
import CreateTeamSpaceModal from './CreateTeamSpaceModal';

function Sidebar() {

    const [sidebarActive, setSidebarActive] = useState(true);
    const [currentPage, setCurrentPage] = useState(window.location.pathname);
    const [userInfo, setUserInfo] = useState(null);
    const [showCreateTeamspaceModal, setShowCreateTeamspaceModal] = useState(false);
    const [teamspaceDropdownOpen, setTeamspaceDropdownOpen] = useState(false);
    const [myTeams, setMyTeams] = useState([]);

    const toggleDropdown = () => {
        setTeamspaceDropdownOpen(!teamspaceDropdownOpen);
    };

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const fetchedUserInfo = await getUserInfo();
                setUserInfo(fetchedUserInfo);
            } catch (error) {
                console.error('Error fetching :', error);
            }

            try {
                const fetchedMyTeams = await getMyTeams();
                setMyTeams(fetchedMyTeams);
            } catch (error) {
                console.error('Error fetching :', error);
            }
        };

        fetchUserInfo();

        function handleResize() {
            if (window.innerWidth < 855) {
                setSidebarActive(false);
            }
        }
        

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);


    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const toggleModal = () => {
        setSidebarActive(!sidebarActive);
    };

    const handleShowCreateTeamspaceModal = () => {
        setShowCreateTeamspaceModal(true);
    }

    const handleSwitchTeam = async (team_id) => {
        try {
            await switchTeam(team_id);
            window.location.reload();

        } catch (error) {
            console.error('Error fetching :', error);
        }
    }

    return (

        <>
            <nav id="sidebar" className={!sidebarActive ? 'active' : ''}>

                <div className="nav-item rounded card px-2 pointer" onClick={toggleDropdown}>
                    <div className='d-flex align-items-center justify-content-around'>
                        <div className='p-2 rounded bg-black'>
                            <FontAwesomeIcon icon={faUser} className='text-white px-1' />
                        </div>
                        <span className='px-2'>{userInfo && userInfo.team.name}</span>
                        <div className='p-2 d-flex flex-column align-items-center justify-content-center'>
                            <FontAwesomeIcon icon={faChevronUp} className='text-muted small' />
                            <FontAwesomeIcon icon={faChevronDown} className='text-muted small' />
                        </div>
                    </div>

                    {teamspaceDropdownOpen && (
                        <div className="dropdown-menu border-0 shadow w-100 show" aria-labelledby="dropdownMenuButton" style={{ transform: 'translateY(50%)', left: 0 }}>
                            <a className="dropdown-item fw-500 pb-2 small">Workspaces</a>
                            {myTeams.map(team => (
                                <a className="dropdown-item d-flex align-items-center py-2" onClick={() => { handleSwitchTeam(team.id) }}>
                                    <span className='small'>{team.name}</span>
                                    <div className='p-2 d-flex flex-column align-items-center justify-content-center'>
                                        <FontAwesomeIcon icon={faArrowRightArrowLeft} className='text-muted small' />
                                    </div>
                                </a>
                            ))}
                        </div>
                    )}
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

                    <hr />

                    <li className='nav-item px-2 rounded' onClick={() => { handleShowCreateTeamspaceModal() }}>
                        <span className='nav-link pointer'>
                            <FontAwesomeIcon icon={faPlus} />
                            <span className='ps-3'>Create a teamspace</span>
                        </span>
                    </li>

                    <li className={`nav-item px-2 rounded ${currentPage === '/settings' ? 'active' : ''}`}>
                        <Link to="/settings" className='nav-link' onClick={() => handlePageChange('/settings')}>
                            <FontAwesomeIcon icon={faGear} />
                            <span className='ps-3'>Settings</span>
                        </Link>
                    </li>

                    <hr />

                    <li className='nav-item px-2 rounded'>
                        <Link to="/profile" className='nav-link'>
                            <FontAwesomeIcon icon={faUser} />
                            <span className='ps-3'>My Profile</span>
                        </Link>
                    </li>

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

            <CreateTeamSpaceModal
                showCreateTeamspaceModal={showCreateTeamspaceModal}
                setShowCreateTeamspaceModal={setShowCreateTeamspaceModal}
            />

        </>

    )
}

export default Sidebar