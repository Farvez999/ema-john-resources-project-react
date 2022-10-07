import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const { products, previousCart } = useLoaderData();    //{ products, previousCart }
    const [cart, setCart] = useState(previousCart);
    return (
        <div>
            <div className='shop-container'>
                <div className="order-container">
                    {
                        cart.map(product => <ReviewItem
                            key={product.id}
                            product={product}
                        ></ReviewItem>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div >
        </div>
    );
};

export default Orders;