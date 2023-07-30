import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import search from '../../assets/magnifying-glass-solid.svg'
import Avatar from '../../components/Avatar/Avatar'
import button from '../button/button'
import './Navbar.css'
const navbar = () => {

    var User = null

    return (
        <nav className='main-nav'>
            <div className="navbar">
                <Link to='/' className='nav-items nav-logo'>
                    <img src={logo} alt='logo' width='150' />
                </Link>
                <Link to='/' className='nav-item nav-btn'>
                    About
                </Link>
                <Link to='/' className='nav-item nav-btn'>
                    Products
                </Link>
                <Link to='/' className='nav-item nav-btn'>
                    For teams
                </Link>
                <form >
                    <input type="text" placeholder="Search..." />
                    <img src={search} alt="search" width='18' className='search-icon' />
                </form>
                {User === null ?
                    <Link to='/Auth' className='nav-item nav-links'>Log in</Link> :
                    <>
                        <Avatar  backgroundColor='#009dff' px='10px' py = '5px' borderRadius='50%' color='white' textdecoration='none'>
                            <Link to='/User' style={{color:"white", textDecoration:"none"}}>
                                O
                            </Link>
                        </Avatar>
                        <button className='nav-item nav-links'>Log out</button>
                    </>
                }
            </div>
        </nav>
    )
}

export default navbar