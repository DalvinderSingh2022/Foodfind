import React from 'react'
import useFetch from './useFetch';
import { Link } from 'react-router-dom';

const MealCard = ({ id }) => {
    const [isLoading, isError, { meals }] = useFetch(id ? `/lookup.php?i=${id}` : '/random.php');
    const mealIngredient = [];

    if (isError || isLoading) return;
    for (const ingredient in meals[0]) {
        if (ingredient.includes("strIngredient") && meals[0][ingredient]) {
            mealIngredient.push(meals[0][ingredient]);
        }
    }
    return (
        <div className='meal flex col j_between animate top'>
            <div className='image_name flex j_start full'>
                <img src={meals[0].strMealThumb || "https://img.freepik.com/premium-photo/there-is-plate-with-fork-knife-it-generative-ai_900775-25146.jpg?w=740"} alt={meals[0].strMeal} />
                <div className='details'>
                    <Link to={`recipes/${meals[0].idMeal}`}>{meals[0].strMeal}</Link>
                    <h5>{meals[0].strArea + " | " + meals[0].strCategory}</h5>
                </div>
            </div>
            <div className='ingredients full'>
                <span>Ingredients</span>
                <div className='ingredients_list full'>
                    {mealIngredient.slice(0, 5).map(ingredient => {
                        return (
                            <div className='ingredient animate Bottom'>
                                <img src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`} alt={ingredient} />
                                <span key={ingredient} className='truncate'>{ingredient}</span>
                            </div>
                        )
                    })}
                    {mealIngredient?.length - 5 > 1 && <div className='ingredient flex animate Bottom'>
                        <span>+{mealIngredient?.length - 5} More</span>
                    </div>}
                </div>
            </div>
            <div className="links flex j_around full">
                <a className='link btn animate Bottom' target='blank'
                    href={meals[0].strYoutube || `https://www.youtube.com/results?search_query=${meals[0].strMeal}`}>
                    watch Tutorial
                </a>
            </div>
        </div>
    )
}

export default MealCard;