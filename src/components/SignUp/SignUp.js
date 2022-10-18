import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='border border-[#95A0A7] w-[500px] mx-auto mt-20 px-10 pt-7 pb-10 rounded-lg'>
            <h1 className='text-center mb-5 text-3xl font-[lato] font-medium'>SignUp</h1>
            <form>
                <div className='mb-4'>
                    <label htmlFor="" className='block font-[lato] text-lg mb-1'>Email</label>
                    <input type="email" className='w-full px-3 py-2 text-lg rounded-md border border-[#95A0A7]'/>
                </div>
                <div className='mb-4'>
                    <label htmlFor="" className='block font-[lato] text-lg mb-1'>Password</label>
                    <input type="password" className='w-full px-3 py-2 text-lg rounded-md border border-[#95A0A7]'/>
                </div>
                <div>
                    <label htmlFor="" className='block font-[lato] text-lg mb-1'>Confirm Password</label>
                    <input type="password" className='w-full px-3 py-2 text-lg rounded-md border border-[#95A0A7]'/>
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