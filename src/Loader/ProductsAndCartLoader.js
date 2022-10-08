import { getStoredCart } from "../utilities/FakeDb";

export const ProductsAndCartLoader = async() => {
    //* get products
    const productsData = await fetch('products.json')
    const products = await productsData.json()

    //* get cart data from local storage
    const storedCart = getStoredCart()
    console.log(storedCart)


    return {products: products, storedCart: storedCart};
};