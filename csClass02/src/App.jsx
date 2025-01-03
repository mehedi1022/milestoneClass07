import { useEffect, useState } from "react";

import "./App.css";
import SingleProduct from "./singleProduct";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./fakeData.json")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
  }, [])
  console.log(products);
  return (
    <>

      <div className="main-container">
        <div className="cards-container">
          {
            products.map(pd=> <SingleProduct></SingleProduct>)
          }
          <div className="card">
            <img className="card-img" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
            <h1>Tesr Test</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laboriosam quam eaque aliquam mollitia ab.</p>
            <div className="card-footer">
              <h1>520 $</h1>
              <button>Add To Cart</button>
            </div>
          </div>

          <div className="card">
            <img src="" alt="" />
          </div>
        </div>
        <div className="cart-container">
          <h1>This is cart</h1>
        </div>
      </div>

    </>
  )
}

export default App;