import React, { useContext } from 'react';

import { NavLink } from 'react-router-dom';

import { AppContext } from '../App';

function Navbar() {
    const animate = useContext(AppContext);
    animate();

    return (
        <nav className='flex j_around animate top'>
            <NavLink className="logo flex" to='/'>
                <span className="material-symbols-rounded">restaurant_menu</span> findfood
            </NavLink>
            <div className="links flex">
                <NavLink className="hover btn" to='category'>Category</NavLink>
                <NavLink className="hover btn" to='recipes'>Recipes</NavLink>
            </div>
        </nav >
    )
}

export default Navbar;