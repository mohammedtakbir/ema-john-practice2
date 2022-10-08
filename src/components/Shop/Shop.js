import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/FakeDb';
import Product from '../Product/Product';
import Cart from '../../components/Cart/Cart';
import './Shop.css';
const Shop = () => {
    const { products, savedCart } = useLoaderData();
    
    const [cart, setCart] = useState(savedCart);
    const handleAddToCart = (selectedProduct) => {
        const isExist = cart.find(product => product.id === selectedProduct.id);
        let newCart = [];
        if (!isExist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        } else {
            isExist.quantity += 1;
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            newCart = [...rest, isExist];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    };
    //* clear cart
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <>
            <div className="shop-container container mx-auto custom-grid1">
                <div className="products-container custom-grid2 mt-16">
                    {
                        products?.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        />)
                    }
                </div>
                <div className="cart-container bg-orange-300 p-5">
                    <Cart cart={cart} clearCart={clearCart} />
                </div>
            </div>
        </>
    );
};

export default Shop;