import React from 'react'
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div className='mx-auto bg-[url(/footer-2.svg),_url(/footer-1.svg)] bg-[position:bottom_left,_bottom_right]
            bg-no-repeat rounded-[30px] bg-[#E7F9FD] w-[1280px] h-[442px]'>
            <div className='flex '>
                <div className='w-[620px] h-[282px] my-19 mx-auto px-2 flex flex-col gap-10'>
                    <div className='mx-auto text-center flex flex-col gap-4'>
                        <h2 className='w-full text-[46px] font-bold font-inter'>Deliciousness to your inbox</h2>
                        <p className='blur-p px-6.9'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    </div>
                        <form className='mx-auto flex justify-between pr-2 pl-8 rounded-3xl bg-white w-[480px] h-[80px]'>
                        <input type='email' className='outline-transparent border-0 bg-white' placeholder='Your email address...' />
                        <button type="submit" className='w-[160px] my-auto rounded-2xl h-[60px] cursor-pointer  bg-black text-white'>Subscribe</button>
                    </form>
                    </div>
            </div>

        </div>
    )
}

export const FooterNav = () => {
    return (
        <nav>
            <ul className='flex justify-between items-center gap-9 font-inter'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/recipe'>Recipes</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/about'>About Us</NavLink>
            </ul>
        </nav>
    )
}
export default Footer
