import React, { Children } from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    // const total = cart.reduce((total, pd) => total + pd.price, 0);
    let total = 0;
    for(var i = 0; i< cart.length; i++){
        const product = cart[i];
        total = total + product.price * product.quantity;
    }

    let shiping = 0;
    if(total > 35){
        shiping = 0;
    }else if(total > 15){
        shiping = 4.99;
    }else if (total > 0){
        shiping = 12.99;
    }
    const tax = formatNumber(total / 10);
    
    const grandTotal = formatNumber(total + shiping + tax);
    
    function formatNumber(num){
        let precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            
            <h3>Order summary</h3>
            <p>Items Orderd: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p>Shiping Cost: {formatNumber(shiping)}</p>
            <p>Tax + Vat: {formatNumber(tax)}</p>
            <p>Total Price: {grandTotal} </p>  
            {props.children}
          
        </div>
    );
};

export default Cart;