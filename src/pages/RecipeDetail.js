import React, { useContext } from 'react';

import { useParams } from 'react-router-dom';

import useFetch from '../components/useFetch';
import Ingredients from '../components/Ingredients';
import { AppContext } from '../App';
import Loading from '../components/Loading';
import Error from '../components/Error';

function RecipeDetail() {
    const { id } = useParams();
    const [isLoading, isError, { meals }] = useFetch(`/lookup.php?i=${id}`);
    const animate = useContext(AppContext);
    animate("RecipeDetail");

    if (isError) {
        return <Error msg={isError} />
    }

    if (isLoading) {
        return <Loading />
    }

    if (!isError) {
        return (
            <main className='recipe'>
                <section className='start flex wrap'>
                    <div className='text animate top'>
                        <h1>{meals?.[0].strMeal}</h1>
                        <h4>{meals?.[0].strCategory}</h4>
                    </div>
                    <div className='image animate top'>
                        <img alt={meals?.[0].strMeal} src={meals?.[0].strMealThumb} />
                    </div>
                </section>
                <section className='flex col'>
                    <h1 className='bottom animate Bottom'>Instructions</h1>
                    <ol>
                        {meals?.[0].strInstructions.split(". ").map((step, index) => <li key={index} className='animate left'>{step}</li>)}
                    </ol>
                </section >
                <section className='flex col'>
                    <Ingredients meal={meals?.[0]}>
                        <h1 className='bottom animate left'>Ingredients</h1>
                    </Ingredients>
                </section>
                <section className='flex'>
                    <a className='link btn animate Bottom' target='blank'
                        href={meals?.[0].strYoutube || `https://www.youtube.com/results?search_query=${meals?.[0].strMeal}`}>
                        watch Tutorial
                    </a>
                </section>
            </main>
        )
    }
}

export default RecipeDetail;