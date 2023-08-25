import React from 'react'

const MealCard = ({ isError, meal }) => {
    if (isError) return;
    const mealIngredient = [];

    for (const ingredient in meal) {
        if (ingredient.includes("strIngredient") && meal[ingredient]) {
            mealIngredient.push(meal[ingredient]);
        }
    }
    return (
        <div className='meal flex col j_between animate top'>
            <div className='image_name flex j_start full'>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <div className='details'>
                    <h4>{meal.strMeal}</h4>
                    <h5>{meal.strArea + " | " + meal.strCategory}</h5>
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
                    href={meal.strYoutube || `https://www.youtube.com/results?search_query=${meal.strMeal}`}>
                    watch Tutorial
                </a>
            </div>
        </div>
    )
}

export default MealCard;