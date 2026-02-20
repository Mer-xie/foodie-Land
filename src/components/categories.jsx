import React from 'react'

const CategoriesProp = ({ image, name }) => {
    return (
        <div className=' font-semibold shadow-2xs text-center w-[180px] h-[202px] flex flex-col items-center justify-center rounded-bl-4xl rounded-br-4xl bg-linear-to-b bg-white from-20% to-[#E7FAFE]'>
            <img src={image} alt='' className='' />
            <div className='text-[18px]  w-[180px] h-[180px] mt-10' >{name}</div>
        </div>
    )
}

const categories = [
    { image: '/breakfast.svg', name: 'Breakfast' },
    { image: '/vegan.svg', name: 'Vegan' },
    {image : '/meat.svg', name: 'Meat' },
    {image : '/cake.svg', name: 'Dessert' },
    {image:'/bread.svg', name: 'Lunch' },
    {image:'/chocolate.svg', name: 'Chocolate' },
];

const Categories = () => {
    return (
        <div className='my-25 mx-8'>
           <div className='flex justify-between items-center'>
               <h2 className='text-[48px] font-semibold '>Categories</h2>
               <button className='text-black bg-[#E7FAFE] rounded-2xl w-[200px] text-[16px] font-semibold h-[60px]'>View All Categories</button>
           </div>

            <div className='flex justify-between items-center my-15 w-[1208px] mx-auto'>
                {categories.map((category) => (
                   <CategoriesProp key={category.name} image={category.image} name={category.name} />
                ))}
            </div>
        </div>
    )
}
export default Categories

