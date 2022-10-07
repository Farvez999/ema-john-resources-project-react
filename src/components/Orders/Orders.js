import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Orders = () => {
    const { products, previousCart } = useLoaderData();    //{ products, previousCart }
    const [cart, setCart] = useState(previousCart);
    return (
        <div>
            <div className='shop-container'>
                <div className="products-container">
                    {/* {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handlerAddToCart={handlerAddToCart}
                    ></Product>)
                } */}
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div >
        </div>
    );
};

export default Orders;