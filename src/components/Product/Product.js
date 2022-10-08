import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
const Product = ({ product, handleAddToCart }) => {
    const { img, name, price, seller, ratings } = product;
    return (
        <div className='border p-4 rounded-lg relative'>
            <img className='rounded-lg' src={img} alt="" />
            <div className='mt-5 mb-7'>
                <h2 className='text-xl font-semibold mb-1'>{name}</h2>
                <h3 className='font-medium'>Price: ${price}</h3>
            </div>
            <div className='pb-5'>
                <p className='text-[#2A414F] text-sm mb-2'>Manufacturer: {seller}</p>
                <p className='text-[#2A414F] text-sm'>Ratings: {ratings} star</p>
            </div>
            <div className='flex justify-center mt-10'>
                <button onClick={() => handleAddToCart(product)} className='font-medium bg-[#FFE0B3] w-full absolute bottom-0 py-3 hover:bg-[orange] text-xl'>
                    <span className='mr-3'>Add to Cart</span>
                    <ShoppingCartIcon className="h-6 w-6 text-black inline"/>
                </button>
            </div>
        </div>
    );
};

export default Product;