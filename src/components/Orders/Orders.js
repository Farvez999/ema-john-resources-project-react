import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const { products, previousCart } = useLoaderData();    //{ products, previousCart }
    const [cart, setCart] = useState(previousCart);

    const handleRemoveItem = (id) => {
        // console.log(id);
        const remaining = cart.filter(product => product._id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }


    return (
        <div>
            <div className='shop-container'>
                <div className="order-container">
                    {
                        cart.map(product => <ReviewItem
                            key={product._id}
                            product={product}
                            handleRemoveItem={handleRemoveItem}
                        ></ReviewItem>)
                    }
                    {
                        cart.length === 0 && <h2>No item for Review! Please <Link to='/'>Shop more</Link></h2>
                    }
                </div>
                <div className="cart-container">
                    <Cart
                        cart={cart}
                        clearCart={clearCart}
                    >
                        <Link to='/shipping'>
                            <button>Proceed Shipping</button>
                        </Link>
                    </Cart>
                </div>
            </div >
        </div>
    );
};

export default Orders;