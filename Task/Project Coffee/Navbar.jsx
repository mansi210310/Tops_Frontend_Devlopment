import React from 'react'
import bean from './Image/Bean Scene.svg'
import home from './Image/HomePage.jpg'
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-between  items-center px-12 py-3 bg-black'>
                <div className=""><img src={bean} alt="" /></div>
                <div className="">
                    <div className='list-none flex gap-[45px]'>
                        <li><a href="/Home" className="no-underline text-white">Home</a></li>
                        <li><a href="/menu"className='no-underline text-white'>Menu</a></li>
                        <li><a href="/aboutus" className='no-underline text-white'>About Us</a></li>
                        <li><a href="/contactus" className='no-underline text-white'>Contact Us</a></li>
                    </div>
                </div>
                <div className="">
                    <div className='flex gap-3 list-none items-center'>
                        <li><button className='text-white '>
                                <a href="/Signin">Sign in</a>
                            </button></li>
                        <li><button className='text-white bg-amber-500 py-1 px-2 rounded'>
                                <a href="/SignUp">Sign Up</a>
                            </button></li>
                    </div>
                </div>
            </nav>
            <div className="">
                {/* <img src={home} alt="" className='home' /> */}
            </div>
        </div>
    )
}

export default Navbar;
