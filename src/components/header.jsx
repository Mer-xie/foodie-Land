import React from 'react'
import {CiForkAndKnife} from "react-icons/ci";
import {RxLapTimer} from "react-icons/rx";
import {IoPlayCircle} from "react-icons/io5";

export const Header = () => {
    return (
        <div className='flex relative my-8 rounded-[53px] mx-auto bg-[#E7FAFE] w-[1280px]'>

            <div className='w-[620px] h-[640px]  py-12 pl-12'>
                <p className='w-[156px] h-[45px] bg-white flex rounded-4xl font-semibold text-sm px-2.5 py-2.5 items-center justify-center gap-2'><img src='/h-icon.svg' alt='' /> Hot Recipes </p>
                <h1 className='w-[520px] h-[154px] text-[64px] font-semibold leading-19.5 my-6'>Spicy delicious chicken wings</h1>
                <p className='blur-p w-[520px]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <div className='w-[250px] flex justify-between pt-8 gap-5'>
                    <span className='flex  items-center justify-center gap-1 w-[139px] h-[40px] rounded-4xl bg-black/5'>
                        <RxLapTimer />
                        <p className=' text-black/60'> 30 minutes</p>
                    </span>
                    <span className='flex items-center justify-center gap-1 w-[139px] h-[40px] rounded-4xl bg-black/5'>
                       <CiForkAndKnife />
                        <p className=' text-black/60'> chicken</p>
                    </span>
                </div>

                <div className="flex justify-between items-center w-[500px] mt-30">
                    <span className='flex gap-2'>
                        <img src='/Ellipse%202.svg' className='rounded-full' alt=''/>
                    <p className='flex flex-col w-[150px]'>
                        <span className='font-bold text-[16px]'>John Smith</span>
                        <span className='font-inter text-sm text-black/60'>15 March 2022</span>
                    </p>
                    </span>

                    <button className='w-[200px] h-[60px] bg-black text-center text-white text-sm rounded-3xl flex items-center justify-center gap-2 '> View Recipes <IoPlayCircle /></button>
                </div>
            </div>
            <img src='/Badge.svg' alt='' className='absolute left-145 top-20'/>
            <div>
                <img src='/Mask%20Group.svg' alt=''/>
            </div>
        </div>
    )
}
