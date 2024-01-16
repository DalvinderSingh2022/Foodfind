import React, { useCallback, useEffect, useState } from 'react';

import MealCard from '../components/MealCard';
import useFetch from '../components/useFetch';
import Loading from '../components/Loading';
import Error from '../components/Error';

const Recipes = () => {
    const [isLoading, isError, { categories }] = useFetch('/categories.php');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [value, setValue] = useState('');
    const [category, setCategory] = useState(null);

    const Fetch = useCallback(async () => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
            const result = await response.json();
            setLoading(false);
            setRecipes(result.meals);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    }, [value]);

    useEffect(() => {
        Fetch();
    }, [Fetch, isError, isLoading]);

    if (error) {
        return <Error msg={isError} />
    }

    if (isLoading) {
        return <Loading />
    }

    if (!error) {
        return (
            <>
                <section className='filters flex animate Bottom'>
                    <div className="flex full search" >
                        <input
                            type="text"
                            placeholder='Recipe name...'
                            value={value}
                            onChange={e => setValue(e.target.value)}
                        />
                    </div>
                    <select className='btn' name="categories" id="categories" onChange={e => setCategory(e.target.value)}>
                        <option value={''}>categories</option>
                        {categories && categories.map(({ idCategory, strCategory }) =>
                            <option value={strCategory} key={idCategory}>{strCategory}</option>
                        )}
                    </select>
                </section>
                <section className='recipes flex col'>
                    <div className="meals">
                        {recipes && recipes
                            .filter(a => a.strCategory === category || !category)
                            .map(recipe => <MealCard meal={recipe} key={recipe.idMeal} />)
                        }
                    </div>
                </section >
            </>)
    }
}

export default Recipes;