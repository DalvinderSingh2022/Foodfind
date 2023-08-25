import React from 'react';

function Navbar() {
    return (
        <nav className='flex j_around'>
            <span className="logo flex">
                <span className="material-symbols-rounded">restaurant_menu</span> findfood
            </span>
            <div className="links flex">
                <a className="bottom hover" href='#category'>Category</a>
                <a className="bottom hover" href='#recipes'>Recipes</a>
            </div>
        </nav >
    )
}

export default Navbar;