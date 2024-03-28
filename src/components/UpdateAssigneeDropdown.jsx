import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';

function UpdateAssigneeDropdown() {

    const [isOpen, setIsOpen] = useState(false);
    const [teamMembers, setTeamMembers] = useState([]);
    
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
                    <div className="dropdown-menu show" aria-labelledby="dropdownMenuButton">
                        <span>asdasd</span>
                    </div>
                )}
            </div>
        </>
    )
}

export default UpdateAssigneeDropdown