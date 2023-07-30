import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/800px-Globe_icon.svg.png'

const Leftsidebar = () => {
    return (
        <div className='left-sidebar'>
            <nav className="side-nav">
                <NavLink to='/' className='side-nav-links' activeClassName='active' style={{ paddingLeft: '40px' }}>
                    <p>Home</p>
                </NavLink>
                <div className="side-nav-div">
                    <div><p style={{ paddingLeft: '40px' }}>PUBLIC</p></div>
                    <NavLink to='/Questions' className="side-nav-links" activeClassName='active' style={{ paddingLeft: '40px' }} >
                        <img src={Globe} alt="Globe" style={{ height: '20px', width: '20px' }} />
                        <p style={{ paddingLeft: '10px' }}> Questions </p>
                    </NavLink>
                    <NavLink to='/Tags' className="side-nav-links" activeClassName='active' style={{ paddingLeft: '70px' }} >
                        <p>Tags</p>
                    </NavLink>
                    <NavLink to='/Tags' className="side-nav-links" activeClassName='active' style={{ paddingLeft: '70px' }} >
                        <p>Users</p>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Leftsidebar      