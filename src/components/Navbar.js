import React, { useContext } from 'react';

import { NavLink } from 'react-router-dom';

import { AppContext } from '../App';

import { IoRestaurantSharp } from "react-icons/io5";

function Navbar() {
    const animate = useContext(AppContext);
    animate();

    return (
        <nav className='flex j_around animate top'>
            <NavLink className="logo flex" to='/'>
                {/* <IoRestaurantSharp /> */}
                findfood
            </NavLink>
            <div className="links flex">
                <NavLink className="hover btn" to='/'>Home</NavLink>
                <NavLink className="hover btn" to='recipes'>Recipes</NavLink>
            </div>
        </nav >
    )
}

export default Navbar;