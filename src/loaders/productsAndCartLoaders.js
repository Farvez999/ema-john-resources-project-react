import { getStoredCard } from "../utilities/fakedb";

export const productsAndCartLoaders = async () => {
    //get products
    const productsData = await fetch('http://localhost:5000/products');
    const { products } = await productsData.json();

    //get cart
    const saveCart = getStoredCard();
    const previousCart = [];
    // console.log(saveCart)
    for (const id in saveCart) {
        // console.log(id)
        const addedProduct = products.find(product => product._id === id);
        // console.log(addedProduct);
        if (addedProduct) {
            const quantity = saveCart[id];
            // console.log(id, quantity);
            addedProduct.quantity = quantity;
            previousCart.push(addedProduct);
        }
    }

    return { products, previousCart };
}