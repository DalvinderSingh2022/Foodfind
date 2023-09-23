import React from 'react'
import { useParams } from 'react-router-dom';

function RecipeDetail() {
    const { id } = useParams();

    return (
        <main>
            <section className='recipes flex col'>
                <div className="meals">
                    {id}
                </div>
            </section >
        </main>
    )
}

export default RecipeDetail;