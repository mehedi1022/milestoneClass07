import React from 'react';

const SingleProduct = ({product}) => {
    console.log(product);
    return (
        <div>
            <div className="card">
            <img className="card-img" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
            <h1>Tesr Test</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laboriosam quam eaque aliquam mollitia ab.</p>
            <div className="card-footer">
              <h1>520 $</h1>
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
    );
};

export default SingleProduct;