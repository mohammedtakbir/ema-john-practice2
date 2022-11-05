import React from 'react';
import { useState } from 'react';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/FakeDb';
import Product from '../Product/Product';
import Cart from '../../components/Cart/Cart';
import './Shop.css';
import { useEffect } from 'react';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0);
    const [size, setSize] = useState(10);
    const [page, setPage] = useState(0);

    const pages = Math.ceil(count / size);

    useEffect(() => {
        const url = `http://localhost:5001/products?page=${page}&size=${size}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setCount(data.count);
            })
    }, [page, size])

    useEffect(() => {
        //* get cart data from local storage
        const storedCart = getStoredCart();
        let savedCart = [];
        const ids = Object.keys(storedCart);
        fetch('http://localhost:5001/productsByIds', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ids)
        })
            .then(res => res.json())
            .then(data => {
                for (const id in storedCart) {
                    const addedProduct = data.find(product => product._id === id);
                    if (addedProduct) {
                        const quantity = storedCart[id];
                        addedProduct.quantity = quantity;
                        savedCart.push(addedProduct);
                    }
                    setCart(savedCart)
                };
            })

    }, [products])


    const handleAddToCart = (selectedProduct) => {
        const isExist = cart.find(product => product._id === selectedProduct._id);
        let newCart = [];
        if (!isExist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        } else {
            isExist.quantity += 1;
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            newCart = [...rest, isExist];
        }
        setCart(newCart);
        addToDb(selectedProduct._id);
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
                            key={product._id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        />)
                    }
                </div>
                <div className="cart-container bg-orange-300 p-5">
                    <Cart cart={cart} clearCart={clearCart} />
                </div>
            </div>
            <div className='text-center pt-20 pb-10'>
                <p className='mb-5 font-medium text-lg'>Selected page: {page} & size {size}</p>
                {
                    [...Array(pages).keys()].map(number => (
                        <button
                            onClick={() => setPage(number)}
                            className={`mx-2 border order-gray-300 px-3 rounded-sm ${page === number && `bg-black text-white`}`}
                            key={number}>{number}</button>
                    ))
                }
                <select className='border' onChange={(e) => setSize(e.target.value)}>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </>
    );
};

export default Shop;