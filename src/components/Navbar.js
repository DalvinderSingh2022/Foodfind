import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='flex j_around animate top'>
            <Link className="logo flex" to='/'>
                <span className="material-symbols-rounded">restaurant_menu</span> findfood
            </Link>
            <div className="links flex">
                <a className="hover btn" href='#category'>Category</a>
                <a className="hover btn" href='#recipes'>Recipes</a>
            </div>
        </nav >
    )
}

export default Navbar;