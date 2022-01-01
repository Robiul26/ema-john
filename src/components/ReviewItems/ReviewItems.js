import React from 'react';

const ReviewItems = (props) => {
    const product = props.product;
   
    return (
       
       <div className="col-md-12">
           <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={product.img} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">Price: {product.price}</p>
                        <p className="card-text">Quantity: {product.quantity}</p>
                        <p className="card-text"><small className="text-muted">only {product.stock} left in stock - order soon</small></p>
                        <button onClick={()=> props.handleRemoveProduct(product.key)} className='btn btn-danger'>Remove</button>
                    </div>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default ReviewItems;