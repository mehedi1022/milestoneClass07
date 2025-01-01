import React from 'react';

const SingleProduct = (props) => {
    // console.log(props.product);
//     const obj = {
//         product: "gias",
//     };
// const {product} = obj;
//     console.log(product);
    
const {product, index} = props;
console.log(index);
    return (
        <div>
            <p>{product.title}</p>
        </div>
    );
};

export default SingleProduct;