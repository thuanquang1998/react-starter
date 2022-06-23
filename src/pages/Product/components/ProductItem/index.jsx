import React from 'react';

const ProductItem = (props) => {
  
    const {name, price} = props.data;

    return (
        <div>
            <h5>Product Name: {name}</h5>
            <p>Price: {price}</p>
        </div>
    );
};

export default ProductItem;


