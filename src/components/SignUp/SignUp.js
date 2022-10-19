import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const SignUp = () => {
    const {createUser} =useContext(AuthContext);
    const [error, setError] = useState(null);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        
        //* password validation
        if(password.length < 6){
            setError('Password should be at least 6 character.')
            return;
        }
        if(password !== confirm){
            setError('Password did not match.')
            return;
        }

        //* Sign up an user 
        createUser(email, password)
        .then(res => {
            const user = res.user;
            form.reset();
            console.log(user);
        })
        .catch(err => console.error(err));





    }


    return (
        <div className='border border-[#95A0A7] w-[500px] mx-auto mt-20 px-10 pt-7 pb-10 rounded-lg'>
            <h1 className='text-center mb-5 text-3xl font-[lato] font-medium'>SignUp</h1>
            <form onSubmit={handleSignUp}>
                <div className='mb-4'>
                    <label htmlFor="" className='block font-[lato] text-lg mb-1'>Email</label>
                    <input type="email" name="email" className='w-full px-3 py-2 text-lg rounded-md border border-[#95A0A7]' required/>
                </div>
                <div className=''>
                    <label htmlFor="" className='block font-[lato] text-lg mb-1'>Password</label>
                    <input type="password" name="password" className='w-full px-3 py-2 text-lg rounded-md border border-[#95A0A7]' required/>
                </div>
                <p className='text-red-500 mb-4 mt-1'>{error}</p>
                <div>
                    <label htmlFor="" className='block font-[lato] text-lg mb-1'>Confirm Password</label>
                    <input type="password" name="confirm" className='w-full px-3 py-2 text-lg rounded-md border border-[#95A0A7]' required/>
                </div>
                <div>
                    <input type="submit" value="Sign Up" className='bg-[#FFE0B3] w-full mt-8 py-[10px] text-xl rounded-md cursor-pointer font-[lato]' />
                </div>
            </form>
            <div>
                <p className='text-center mt-3 text-sm font-medium font-[lato]'>Already have an Account? <Link to='/login' className='underline text-[#FF9900]'>Login</Link></p>
            </div>
        </div>
    );
};
export default SignUp;