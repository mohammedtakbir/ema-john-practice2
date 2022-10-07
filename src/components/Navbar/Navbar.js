import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <NavLink to='/shop'>Shop</NavLink>
            <NavLink to='/orders'>Orders</NavLink>
            <NavLink to='/inventory'>Inventory</NavLink>
            <NavLink to='/about'>About</NavLink>
        </div>
    );
};

export default Navbar;