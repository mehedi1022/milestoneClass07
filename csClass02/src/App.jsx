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
    // console.log(p);
    const isExist = cart.find(item => item.id == p.id);
    if (!isExist) {
      setCart([...cart,p]);
    }
    else{
      alert("already exist")
    }

  }

  // const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  // const num2 = [...num, 100];
  // console.log(num2);



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
          <div>
            {
              cart.map((item, index) => (
                <div className="cart-info">
                  <p>{index+1}</p>
                  <h5>{item.title.slice(0, 10)}</h5>
                  <h5>{item.price}</h5>
                <button >Delete</button>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default App;