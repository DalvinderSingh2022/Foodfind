import React from 'react';

import CategoryCard from '../../components/CategoryCard';
import useFetch from '../../components/useFetch';

const CategorySection = () => {
    const [isLoading, isError, { categories }] = useFetch('/categories.php');

    if (isError || isLoading) return;
    return (
        <section className='category flex col' id='category'>
            <h1 className='bottom animate left'>Category</h1>
            <div className="categories cardsContainer full">
                <div className="circle animate right"></div>
                {categories?.map(category => {
                    return <CategoryCard category={category} key={category.idCategory} />;
                })}
            </div >
        </section >
    );
}

export default CategorySection;