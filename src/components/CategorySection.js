import React from 'react';
import CategoryCard from './CategoryCard';

function CategorySection({ isError, categories }) {

    if (isError) return;
    return (
        <section className='category flex col' id='category'>
            <h1 className='bottom animate left'>Category</h1>
            <div className="categories cardsContainer full">
                <div className="circle animate right"></div>
                {categories?.map(category => {
                    return <CategoryCard category={category} key={category.idCategory} />;
                })}
            </div>
        </section>
    );
}

export default CategorySection;