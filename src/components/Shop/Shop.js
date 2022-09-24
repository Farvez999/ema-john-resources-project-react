import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const [cart, setCart] = useState([]);
    console.log(cart.length)

    const handlerAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handlerAddToCart={handlerAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
                <p>Selected Item: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;