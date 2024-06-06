//import ProductCard from "./ProductCard";
import ProductCard from "../ProductCard";
import { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { Link } from "react-router-dom";

const gp = [
    {
      title: "Apple iPhone 14",
      price: "Rs. 1,00,000",
    },
    {
      title: "Apple iPhone 13",
      price: "Rs. 70,000",
    },
    {
      title: "Google Pixel 7",
      price: "Rs. 50,000",
    },
    {
      title: "Nokia 1100",
      price: "Rs. 2,000",
    },
    {
      title: "Samsung Galaxy S10",
      price: "Rs. 1,00,000",
    },
    {
      title: "Sony Xperia S10",
      price: "Rs. 1,00,000",
    },
  ];

  function getproductsApi(callback)
  {
    setTimeout(function() {
      console.log("api called ");
      callback(gp);
    }, 4000);
  }
export default function Products()
{
  let [products,setProducts]=useState([]);
  let [loading,setloading]=useState(true);
  // getproductsApi(function(global){
  //   console.log("callback called");
  //   setProducts(global);
  //   setloading(false);
  // });
  console.log(useWindowSize());
  useEffect(()=>{
    // getproductsApi(function(global){
    //   console.log("callback called");
    //   setProducts(global);
    //   setloading(false);
    // });
fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products").then(res=>{
  console.log(res);
  return res.json();
}).then((res)=>{
  console.log(res);
  setProducts(res);
  setloading(false);
});

  },[]);
  console.log("api completed");
  if(loading)
  {
    return (
        <div>
          <img
            alt="loader"
            src="https://media1.tenor.com/m/k29LXFgOh9QAAAAC/miss-you.gif"
          ></img>
        </div>
    );
  }
    return(
        <div>
            <Link to="/cart">Cart</Link>
            {products.map(function(item){
                return <ProductCard key={item.title} product={item} />
            })}
        </div>
    );
}

// passing a parameter in react to a component is known as props
//       <ProductCard title={} name={} />
