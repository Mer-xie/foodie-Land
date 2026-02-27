import React from 'react'
import {RxLapTimer} from "react-icons/rx";
import {CiForkAndKnife} from "react-icons/ci";

const CardComponent = ({ image, title, readyInMinutes, dishTypes }) => {
    return (
        <div className='w-[400px] h-[434px] rounded-3xl bg-[#E7F9FD] '>
            <img src={image} alt='' />
            <p>{title}</p>
            <span>
                   <div className='w-[250px] flex justify-between pt-8 gap-5'>
                    <span className='flex  items-center justify-center gap-1 w-[139px] h-[40px] rounded-4xl bg-black/5'>
                        <RxLapTimer />
                        <p className=' text-black/60'> {readyInMinutes} minutes</p>
                    </span>
                    <span className='flex items-center justify-center gap-1 w-[139px] h-[40px] rounded-4xl bg-black/5'>
                       <CiForkAndKnife />
                        <p className=' text-black/60'> {dishTypes}</p>
                    </span>
                </div>
            </span>
        </div>
    )
}
export default Cardcomponent
