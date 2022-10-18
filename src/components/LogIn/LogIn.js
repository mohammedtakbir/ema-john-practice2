import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const LogIn = () => {
    const {userLogIn} = useContext(AuthContext);    
    const navigator = useNavigate();


    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        //* Login an user
        userLogIn(email, password)
        .then(res => {
            const user = res.user;
            navigator('/')
            console.log(user)
        })
        .catch(err => console.error(err))
    }

    return (
        <div className='border border-[#95A0A7] w-[500px] mx-auto mt-20 px-10 pt-7 pb-10 rounded-lg'>
            <h1 className='text-center mb-5 text-3xl font-[lato] font-medium'>Login</h1>
            <form onSubmit={handleLogIn}>
                <div className='mb-4'>
                    <label htmlFor="" className='block font-[lato] text-lg mb-1'>Email</label>
                    <input type="email" name="email" className='w-full px-3 py-2 text-lg rounded-md border border-[#95A0A7]' />
                </div>
                <div className='mb-4'>
                    <label htmlFor="" className='block font-[lato] text-lg mb-1'>Password</label>
                    <input type="password" name='password' className='w-full px-3 py-2 text-lg rounded-md border border-[#95A0A7]' />
                </div>
                <div>
                    <input type="submit" value="Sign Up" className='bg-[#FFE0B3] w-full mt-8 py-[10px] text-xl rounded-md cursor-pointer font-[lato]' />
                </div>
            </form>
            <div>
                <p className='text-center mt-3 text-sm font-medium font-[lato]'>New to Ema-John? <Link to='/signup' className='underline text-[#FF9900]'>Create an Account</Link></p>
            </div>
        </div>
    );
};

export default LogIn;