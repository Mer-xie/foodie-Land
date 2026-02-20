import React from 'react'
import {FiInstagram} from "react-icons/fi";

const InstagramSection = () => {
    return (
        <div className='mt-15 w-full h-fit bg-linear-to-b flex flex-col gap-10 bg-[#E7F9FD] from-20% to-[#E7F9FD] py-20 text-center'>
            <div className=' w-[840px] mx-auto flex flex-col gap-8'>
                <h1 className='text-5xl font-semibold'>Check out @foodieland on Instagram</h1>
                 <p className='blur-p'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
             </div>

            <div className='flex justify-between px-10'>
                <img src='/post1.svg' alt='' />
                <img src='/Post%20(1).svg' alt='' />
                <img src='/post3.svg' alt='' />
                <img src='/post4.svg' alt='' />
            </div>

            <button className='flex  w-[200px] h-[60px] rounded-3xl pl-6 mx-auto items-center gap-1 bg-black text-white ' type='button'>Visit Our Instagram<FiInstagram /></button>
        </div>
    )
}
export default InstagramSection
