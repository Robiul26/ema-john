import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

import happyImg from '../../images/giphy.gif';
import ReviewItems from '../ReviewItems/ReviewItems';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlace, setOrderPlace] = useState(false);
    const handlePlaceOrder = () =>{
        setCart([]);
        processOrder();
        setOrderPlace(true);
        console.log('place ordered');
    }
    const handleRemoveProduct = (productKey) =>{
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(() => {
        const savedCart = getDatabaseCart();
        // console.log(savedCart);
        const productKeys = Object.keys(savedCart);
        // console.log(productKey);
        const cardProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        // console.log(cardProducts);
        setCart(cardProducts);
    }, []);

    return (
       <div className="container">
            <div className='row'>
                <div className="col-md-9">
                    <div className="row mt-5">
                        {orderPlace && <img src={happyImg} alt="" />}
                        {/* <h2>Cart Items: {cart.length}</h2> */}
                        {cart.map(pd => <ReviewItems handleRemoveProduct={handleRemoveProduct} key={pd.key} product={pd}/> )}
                    </div>
                </div>
                <div className="col-md-3">
                    <Cart cart={cart}>
                        {/* <Link>Place Order</Link> */}
                    {cart.length > 0 &&    <button onClick={handlePlaceOrder} className='btn btn-primary'>Place Order</button>}
                    {cart.length === 0 &&    <Link to='/ema-john-simple/shop' className='btn btn-primary'>Go to shop</Link>}
                    </Cart>
                </div>
            </div>
       </div>
    );
};

export default Review;