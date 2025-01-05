import { useEffect, useState } from "react";

import "./App.css";
import SingleProduct from "./singleProduct";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
  }, [])

  const handleCart = (p) => {
    console.log(p);
    setCart([p]);
  }
  console.log(cart);

  return (
    <>

      <div className="main-container">
        <div className="cards-container">
          {
            products.map(pd => <SingleProduct product={pd} handleCart={handleCart}></SingleProduct>)
          }


        </div>
        <div className="cart-container">
          <h1>This is cart</h1>
          <div className="cart-title">
            <h5>Name</h5>
            <h5>Price</h5>
          </div>
        </div>
      </div>

    </>
  )
}

export default App;