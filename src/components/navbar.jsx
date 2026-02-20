import React from 'react'
import {NavLink} from 'react-router-dom';
import {FaXTwitter} from "react-icons/fa6";
import {FaFacebookF} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";

const Navbar = () => {
    const NavItem = ({ to, children }) => (
        <li>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    `hover:text-blue-500/70 ${isActive ? 'text-blue-500/70 underline font-semibold' : ''}`
                }
            >
                {children}
            </NavLink>
        </li>
    );

    return (
        <div className="border border-x-0 border-t-0 border-b-black/10 font-inter">
            <nav className='flex justify-between w-[1280px] h-[30px] mx-auto my-10'>
                <img src='/Foodieland..svg' alt='logo' />

                <ul className='flex justify-between items-center gap-9 font-inter'>
                    <NavItem to='/'>Home</NavItem>
                    <NavItem to='/recipe'>Recipes</NavItem>
                    <NavItem to='/blog'>Blog</NavItem>
                    <NavItem to='/contact'>Contact</NavItem>
                    <NavItem to='/about'>About Us</NavItem>
                </ul>


                <div className='flex justify-between gap-8'>
                    <a><FaFacebookF /></a>
                    <a><FaXTwitter /></a>
                    <a><FiInstagram /></a>
                </div>
            </nav>
        </div>
    )
}
export default Navbar
