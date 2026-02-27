import {Header} from "../../components/header.jsx";
import Categories from "../../components/categories.jsx";
import InstagramSection from "../../components/instagramSection.jsx";

export const HomePage = () => {
    // const [recipe, setRecipe] = useState([])
    // const [loading, setLoading] = useState(true)
    //
    // useEffect(() => {
    //     const getRecipe = async () => {
    //         const data = await fetchFromSpoonacular('/recipes/random', { number: 10 })
    //         setRecipe(data.recipe)
    //         setLoading(false)
    //     }
    //     getRecipe()
    // }, [])
    //
    // if (loading) return <p>Loading...</p>

    return (
        <div className=''>
            <Header />
            <Categories />
            <div className="w-[1280px] mx-auto text-center">
                <h1 className=''>Simple and tasty recipes</h1>
                <p className='w-[706px] mx-auto blur-p my-8'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>

                {/*{recipe.map((recipes) => (*/}
                {/*    <CardComponent*/}
                {/*        key={recipes.id}*/}
                {/*        image={recipes.image}*/}
                {/*        title={recipes.title}*/}
                {/*        readyInMinutes={recipes.readyInMinutes}*/}
                {/*        dishTypes={recipes.dishTypes}*/}
                {/*    />*/}
                {/*))}*/}
            <div>

            </div>
            </div>

            <div className='flex justify-between items-center my-18 mx-8'>
                <div className='flex flex-col gap-12'>
                    <h1 className='w-[520px] leading-14'>Everyone can be a
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
