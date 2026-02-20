import React from "react";
import {Header} from "../../components/header.jsx";
import Categories from "../../components/categories.jsx";
import InstagramSection from "../../components/instagramSection.jsx";

export const HomePage = () => {
    return (
        <div className=''>
            <Header />
            <Categories />
            <div className='flex justify-between items-center my-18 mx-8'>
                <div className='flex flex-col gap-12'>
                    <h1 className='text-5xl font-bold w-[520px] leading-14'>Everyone can be a
                        chef in their own kitchen</h1>
                    <p className='w-[480px]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <button className='w-[200px] h-[60px] bg-black text-center text-white text-sm rounded-3xl'>Learn More</button>
                </div>
                <div className='position relative w-[710px] h-[597px] rounded-bl-4xl rounded-br-4xl bg-linear-to-b bg-white from-20% to-[#E7FAFE]'>
                    <img src='/chef1.svg' alt='' className=''/>
                    <img src='/meat.svg' alt='' className='position absolute top-18 left-19 -rotate-15'/>
                    <img src='/vegan.svg' alt='' className='position absolute top-50 right-10'/>
                    <img src='/onion.svg' alt='' className='position absolute top-25 right-40'/>
                    <img src='/tomato.svg' alt='' className='position absolute bottom-25 -left-5'/>
                </div>
            </div>
            <InstagramSection/>
            <div className='my-15 mx-8'>
                new section
            </div>
        </div>
    );
};
