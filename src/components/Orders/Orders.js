import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/FakeDb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
const Orders = () => {
    const { savedCart } = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    const handleDelete = (id) => {
        const remaining = cart.filter(product => product._id !== id)
        setCart(remaining);
        removeFromDb(id);
    };
    //* clear cart
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart()
    };
    return (
        <div>
            <div className="container mx-auto custom-grid3">
                <div className="mt-16">
                    {
                        cart?.map(product => <ReviewItem
                            key={product._id}
                            product={product}
                            handleDelete={handleDelete}
                            />)
                        }
                </div>
                <div className="bg-orange-300 p-5">
                    <Cart
                        cart={cart}
                        clearCart={clearCart}
                    />
                </div>
            </div>
        </div>
    );
};

export default Orders;