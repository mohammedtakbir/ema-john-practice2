const getStoredCart = () => {
    let shoppingCart;
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    } else {
        shoppingCart = {};
    }
    return shoppingCart;
}
const addToDb = (id) => {
    const storedCart = getStoredCart();
    const quantity = storedCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        storedCart[id] = newQuantity;
    }else{
        storedCart[id] = 1;
    };
    localStorage.setItem('shopping-cart', JSON.stringify(storedCart));
}

export { addToDb, getStoredCart };