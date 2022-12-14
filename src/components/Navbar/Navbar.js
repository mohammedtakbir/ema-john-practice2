import React from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg';

const Navbar = () => {
    const { user, userSignOut } = useContext(AuthContext);
    //* Sign Out
    const handleSignOut = () => {
        userSignOut()
            .then(() => { })
            .catch(err => console.error(err))
    };
    return (
        <div className='bg-[#1C2B35] py-4'>
            <div className='flex container mx-auto justify-between items-center md:px-0 px-3'>
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
                <div className=''>
                    <NavLink style={({ isActive }) => {
                        return isActive ? { color: 'orange' } : undefined
                    }} className='no-underline ml-10 text-white md:text-lg hover:text-orange-300' to='/shop'>Shop</NavLink>
                    <NavLink style={({ isActive }) => {
                        return isActive ? { color: 'orange' } : undefined
                    }} className='no-underline ml-10 text-white md:text-lg hover:text-orange-300' to='/orders'>Orders</NavLink>
                    <NavLink style={({ isActive }) => {
                        return isActive ? { color: 'orange' } : undefined
                    }} className='no-underline ml-10 text-white md:text-lg hover:text-orange-300' to='/inventory'>Inventory</NavLink>
                    <NavLink style={({ isActive }) => {
                        return isActive ? { color: 'orange' } : undefined
                    }} className='no-underline ml-10 text-white md:text-lg hover:text-orange-300' to='/shipping'>Shipping</NavLink>

                    {user?.email ?
                        <NavLink onClick={handleSignOut} className='no-underline ml-10 text-white md:text-lg hover:text-orange-300'>Sign Out</NavLink> :
                        <>
                            <NavLink style={({ isActive }) => {
                                return isActive ? { color: 'orange' } : undefined
                            }} className='no-underline ml-10 text-white md:text-lg hover:text-orange-300' to='/login'>Login</NavLink>
                            <NavLink style={({ isActive }) => {
                                return isActive ? { color: 'orange' } : undefined
                            }} className='no-underline ml-10 text-white md:text-lg hover:text-orange-300' to='/signup'>Sign Up</NavLink>
                        </>
                    }




                    <span className='text-white ml-3'>{user?.email}</span>
                </div>
            </div>

        </div>
    );
};

export default Navbar;