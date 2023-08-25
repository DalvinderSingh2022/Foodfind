import React, { useState } from 'react';
import MealCard from './MealCard';

function RecipeSection({ isError, meal }) {
    const [count, setCount] = useState(3);

    return (
        <section className='recipes flex col' id='recipes'>
            <h1 className='bottom animate right'>Trending Dishes</h1>
            <div className="meals">
                {Array.apply(null, Array(count)).map((num, index) => {
                    return <MealCard key={index} isError={isError} meal={meal} />
                })}
            </div>
            <span
                onClick={() => { document.body.scrollBy(300, 300); setCount(prev => prev + 3) }}
                to='recipes' className='pageLink btn'>Explore More</span>
        </section>
    );
}

export default RecipeSection;