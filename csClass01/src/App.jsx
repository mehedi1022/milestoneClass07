import { useEffect, useState } from "react";

import "./App.css";
import SingleProduct from "./components/SingleProduct/SingleProduct";

// import handleClick from "./components/function/test";

function App() {

  // const result = handleClick()
  // console.log(result);

  const [name, setName] = useState("gias");
  const [products, setProducts] = useState([])

  let control = false;

  useEffect(async () => {
    // console.log("hello boss");
   const response = await fetch("https://fakestoreapi.com/products");
   const data = await response.json();
   setProducts(data)
  }, []);

  // console.log(product);



  const handleChange = () => {
    // setName("hero alom");
    // control = true;
    // console.log(control);
    setName("hero alom")
  }



  // console.log(name);

  // useState("hero alom");

  // console.log(name);



  // const [stateCount, setStateCount] = useState(0);

  // // setStateCount("gias");

  // // console.log(stateCount);

  // let count = 0;

  // const handleVariableClick = () => {
  //   count = count + 1;
  //   // console.log(count);

  // }

  // const handleStateClick = () => {
  //   const sum = stateCount + 1;
  //   setStateCount(sum);
  // }

  // console.log(count);

  return (
    <>
      <h1>Main App js</h1>
      <button onClick={handleChange}>HndleName Change</button>

      {
        products.map((item) => (
          <SingleProduct product={item} index={index}></SingleProduct>
        ) 
        )
      }

      {/* <h1>StateCount : {stateCount}</h1>
      <h1>variableCount : {count}</h1>

      <button onClick={handleVariableClick}>variableCount</button>
      <button onClick={handleStateClick}>StateCount</button> */}
    </>
  );
}

export default App;