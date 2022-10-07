import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const products = useLoaderData()
    return (
        <>
            <div className="shop-container container mx-auto custom-grid1">
                <div className="products-container custom-grid2 mt-16">
                    {
                        products.map(product => <Product 
                            key={product.id}
                            product={product}
                            />)
                    }
                </div>
                <div className="cart-container">
                    <h2>cart summery</h2>
                </div>
            </div>
        </>
    );
};

export default Shop;