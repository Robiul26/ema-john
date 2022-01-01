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
    );
};

export default ProductDetails;