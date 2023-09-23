import React from 'react';
import MealCard from '../../components/MealCard';

function RecipeSection() {
    return (
        <section className='recipes flex col' id='recipes'>
            <h1 className='bottom animate right'>Trending Dishes</h1>
            <div className="meals">
                {Array.apply(null, Array(3)).map((num, index) => {
                    return <MealCard key={index} />
                })}
            </div>
            <span className='pageLink btn'>Explore More</span>
        </section >
    );
}

export default RecipeSection;