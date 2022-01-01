import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
const Shop = () => {  
    const first10 = fakeData.slice(0,10);
    // console.log(first10);
   const [products, setProducts] = useState(first10);
   const [cart, setCart] = useState([]);
   useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        })
        setCart(previousCart);
   },[]);
   
    
   const handleAddProduct = (product) => {
    const toBeAddedKey = product.key;
    const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
    let count = 1;
    let newCart;
    if(sameProduct){
        count = sameProduct.quantity + 1;
        sameProduct.quantity = count;
        const others = cart.filter(pd => pd.key !== toBeAddedKey);
        newCart = [...others, sameProduct];
    }else{
        product.quantity = 1;
        newCart = [...cart, product];
    }
    setCart(newCart);
       addToDatabaseCart(product.key, count);
   }
    return (
       <div className="container">
            <div className="row mt-5">
            <div className="col-md-9">
                <div className="row">
                    {
                    products.map(product => <Product showAddToCard={true} handleAddProduct={handleAddProduct} key={product.key} product={product}/> )
                    }
                </div>               
            </div>
            <div className="col-md-3">
                <Cart cart={cart} >
                    <Link to="/ema-john-simple/review"> <button className='btn btn-primary'>Review Order </button></Link> 
                   
                </Cart>
            </div>
        </div>
       </div>
    );
};

export default Shop;
