import React from 'react';

const Cart = ({cart}) => {
    console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        total += product.price * product.quantity;
        shipping += product.shipping * product.quantity;
        quantity += product.quantity;
    };
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + parseInt(tax);
    return (
        <div className='sticky top-0'>
            <h3 className='mt-6 text-2xl font-medium mb-4'>Order Summery</h3>
            <h4 className='mb-3'>Selected Item: {quantity}</h4>
            <p className='mb-3'>Total Price: ${total}</p>
            <p className='mb-3'>Total Shipping Charge: ${shipping}</p>
            <p className='mb-3'>Tax: ${tax}</p>
            <h5 className='text-2xl font-medium'>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;