import { getStoredCart } from "../utilities/FakeDb";

export const ProductsAndCartLoader = async() => {
    //* get products
    const productsData = await fetch('products.json')
    const products = await productsData.json()

    //* get cart data from local storage
    const storedCart = getStoredCart();
    let savedCart = [];
    for(const id in storedCart){
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    };

    return {products: products, savedCart: savedCart };
};