import React from 'react';

const SingleProduct = ({product}) => {
    console.log(product);
    return (
        <div>
           <div className="card">
            <img className="card-img" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
            <h1>Tesr Test</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur quasi obcaecati id eveniet voluptatem sapiente quisquam. Libero alias mollitia ullam iusto tempore facere fugit.</p>
            <div className="card-footer">
              <h1>520 $</h1>
              <button className="add-btn">Add To Cart</button>
            </div>
          </div>
          <div className="card">
            <img src="" alt="" />
          </div>
        </div>
    );       
};

export default SingleProduct;