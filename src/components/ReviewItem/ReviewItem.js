import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'
const ReviewItem = ({ product, handleDelete }) => {
    const { name, price, quantity, img, shipping, id } = product;
    return (
        <div>
            <div className='flex gap-5 border mb-8 p-3 rounded-md'>
                <img src={img} alt="" className='w-[95px] h-[95px]' />
                <div className='flex w-full justify-between items-center'>
                    <div>
                        <h3 className='font-medium'>{name}</h3>
                        <p>Price: ${price}</p>
                        <p>Shipping Charge: ${shipping}</p>
                        <p>Quantity: {quantity}</p>
                    </div>
                    <div className='w-[55px] h-[55]'>
                        <button onClick={() => handleDelete(id)}>
                            <TrashIcon className="h-6 w-6 text-[#EB5757]" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;