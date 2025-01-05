import React from 'react';

const SingleProduct = ({ product, handleCart }) => {
  // console.log(handleCart);
  return (
    <div>
      <div className="card">
        <img className="card-img" src={product.image} alt="" />
        <h1>{product.title.slice(0, 10)}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laboriosam quam eaque aliquam mollitia ab.</p>
        <div className="card-footer">
          <h1>{product.price} $</h1>
          <button className="add-btn" onClick={(e) => handleCart(product)}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;