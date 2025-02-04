import React from 'react'
import './Navbar.css'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
        <nav>
        <ul>
            <li><Link to='/home' className='link'>Home</Link></li>
            <li><Link to='/about' className='link'>About</Link></li>
            <li><Link to='/contact' className='link'>Contact</Link></li>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar
