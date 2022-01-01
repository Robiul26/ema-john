import React from 'react';
import { Link } from 'react-router-dom';
const Product = (props) => {
    const product = props.product;
    // console.log(props);
    return (
        <div className="col-md-12">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={product.img} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            {props.showAddToCard?
                              <h5 className="card-title">
                              <Link to={'/ema-john-simple/product/'+ product.key}>{product.name}</Link>
                              </h5> 
                             : 
                             <h5 className="card-title">
                             {product.name}
                             </h5> 
                             }
                          
                            
                            <p><small>by: {product.seller}</small></p>
                            <p>$ {product.price}</p>
                            <p>only {product.stock} left in stock - order soon</p>
                          {props.showAddToCard &&  <button className='btn btn-primary' onClick={() => props.handleAddProduct(product)}>add to cart</button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;