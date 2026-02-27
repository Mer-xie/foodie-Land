import React, { useState, useEffect } from 'react'
import {fetchFromSpoonacular} from "../../utils/api.jsx";


const BlogPage = () => {
    const [recipes, setRecipes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const get = async () => {
            const data = await fetchFromSpoonacular('/recipes/random', { number: 6 })
            setRecipes(data.recipes)
            setLoading(false)
        }
        get()
    }, [])

    return (
        <div className='mx-8'>
            <div className='my-18 gap-5 flex flex-col items-center justify-center'>
                <h1>Blog & Article</h1>
                <p className='blur-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            </div>
            <form className='mb-20 border border-black/30 mx-auto flex justify-between pr-2 pl-8 rounded-3xl bg-white w-[700px] h-[80px]'>
                <input type='text' className='w-[500px] h-[60px] mt-3 outline-transparent border-0 bg-white' placeholder='Your email address...' />
                <button type="submit" className='w-[160px] my-auto rounded-2xl h-[60px] cursor-pointer  bg-black text-white'>Search</button>
            </form>

            {loading ? (
                <div className='flex justify-center h-[300px]'>
                    <div className='w-12 h-12 border-4 border-black/10 border-t-blue-300 rounded-full animate-spin' />
                </div>
            ) : (
                <div className=''>
                    {recipes.map((recipe) => (
                        <div key={recipe.id} className="flex my-8 gap-6 w-[840px] h-[200px] ">
                            <img src={recipe.image} alt={recipe.title} className='h-[200px] rounded-3xl'/>
                            <div className="flex flex-col gap-3">
                                <p className='text-2xl font-semibold'>{recipe.title}</p>
                                <p className='blur-p'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim  </p>
                                <p className='mt-12'>{recipe.sourceName}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}



export default BlogPage