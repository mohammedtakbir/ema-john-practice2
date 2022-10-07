import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    const products = useLoaderData()
    console.log(products)
    return (
        <div>
            <h1>total Products: {products?.length}</h1>
        </div>
    );
};

export default Shop;