import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';

function UpdateAssigneeDropdown({ teamMembers }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="dropdown">
                <button
                    className="btn btn-basic bg-gray shadow-sm"
                    onClick={toggleDropdown}
                >
                    <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                </button>
                {isOpen && (
                    <div className="dropdown-menu show p-3 border-0 shadow" aria-labelledby="dropdownMenuButton">
                        {teamMembers.map(teamMember => (
                            <li className='nav-item py-2' key={teamMember.id}>
                                {teamMember.user.name}
                            </li>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default UpdateAssigneeDropdown