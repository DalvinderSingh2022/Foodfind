import React from 'react';

function StartSection() {

    return (
        <section className='start flex'>
            <div className='text'>
                <h1>Let's Start Cooking With Popoular Recipes
                    <div className="circle"></div>
                </h1>
                <p>Want to learn cook but confused how to start ?</p>
                <p>No need to worry again !</p>
            </div>
            <div className='image'>
                <img
                    src="https://media.istockphoto.com/id/1449613579/vector/asian-food-spicy-tom-yum-soup-a-traditional-asian-soup-image-in-levitation-style.jpg?s=612x612&w=0&k=20&c=A7lhtCJNLRi7GeTcdhwBKWGf1yy6thy2lD0FQGTDGtk="
                    alt="bowl"
                />
            </div>
        </section>);
}

export default StartSection;