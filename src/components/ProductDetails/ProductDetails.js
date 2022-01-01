import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {productKey} = useParams();
    console.log(productKey);
    const product = fakeData.find(pd => pd.key === productKey);
    console.log(product.key);
//    fakeData.map(pd => pd.find(product => product.key === key));
    return (
      <div className="container">
        <div className="row mt-5">
            <div className="col-md-12">
            <Product product={product}></Product>
            </div>
        </div>
      </div>
        // <div className="card mb-3">
        //     <div className="row g-0">
        //         <div className="col-md-4">
        //             <img src={product.img} className="img-fluid rounded-start" alt="..."/>
        //         </div>
        //         <div className="col-md-8">
        //             <div className="card-body">
        //             <h5 className="card-title">{product.name}</h5>
        //             <p className="card-text">By: {product.seller}</p>
        //             <p className="card-text">Price: {product.price}</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default ProductDetails;