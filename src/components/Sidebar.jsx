import React from 'react'

function Sidebar() {
    return (

        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>Bootstrap Sidebar</h3>
            </div>

            <ul className="list-unstyled components">
                <li className="active">
                    <a href="#homeSubmenu" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li className='nav-item'>
                            <a href="#" className='nav-link'>Home 1</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#" className='nav-link'>Home 2</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#" className='nav-link'>Home 3</a>
                        </li>
                    </ul>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link'>About</a>
                </li>
                <li className='nav-item'>
                    <a href="#pageSubmenu" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                    <ul className="collapse list-unstyled" id="pageSubmenu">
                        <li className='nav-item'>
                            <a href="#" className='nav-link'>Page 1</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#" className='nav-link'>Page 2</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#" className='nav-link'>Page 3</a>
                        </li>
                    </ul>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link'>Portfolio</a>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link'>Contact</a>
                </li>
            </ul>

            <ul className="list-unstyled CTAs">
                <li className='nav-item'>
                    <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Download source</a>
                </li>
                <li className='nav-item'>
                    <a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</a>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar