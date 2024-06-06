import logo from './logo.svg';
import './App.css';

import Products from './components/Products';
import { useEffect, useState } from 'react';
import CartContext from './Context/CartContext';
import CartPage from './pages/CartPage';
import ProductsPage from './pages/productsPage';
import {Route,Switch} from "react-router-dom";
import NotFoundPage from './pages/NotFoundPage';
import Categories from './components/Categories';

export var d=20;
export var e=30;

// promise demo
// let p=new Promise(function(resolve,reject){
//   resolve("Hi");
// });

// p.then((result)=>{
//   console.log(result);
// },(errors)=>{
//   console.log(errors);
// })


function App() {
let [cart,setCart]=useState({});
function addTocart(product)
{
  const newCart={...cart};
  if(!newCart[product.id])
  {
    newCart[product.id]={
      id:product.id,
      title:product.title,
      price:product.price,
      quantity:0
    };
  }
  newCart[product.id].quantity+=1;
  setCart(newCart);
}
function removeFromCart(product)
{
  const newCart={...cart};
  if(!newCart[product.id])return;
  newCart[product.id].quantity-=1;
  if(newCart[product.id].quantity<=0)
  {
    delete newCart[product.id];
  }
  setCart(newCart);
}
return (
  <CartContext.Provider value={{cart,addTocart,removeFromCart}}>
  <div className="App">
    <Switch>
    <Route exact={true} path="/" component={ProductsPage}></Route>
    <Route exact={true} path="/cart" component={CartPage}></Route>
    <Route exact={true} path="/categories" component={Categories}></Route>
    <Route component={NotFoundPage}></Route>
    </Switch>
      </div>
      </CartContext.Provider>
);
// let [count1,setCount1]=useState(0);
// let [count2,setCount2]=useState(0);

// console.log("count1="+count1+", count2="+count2);
// function increment1()
// {
//     setCount1(count1+1);
// }
// function increment2()
// {
//   setCount2(count2+1);
// }
/*
// useEffect Demo some codes
useEffect(function(){
console.log("Mounting");
  setCount2(count2+1);
}); // will be called 1st render + every re render


useEffect(function(){
  console.log("Mounting");
  },[]); // this will be called only once
*/

// useEffect(function(){
//   console.log("Mounting count 1");
//   },[count1]); // will be called 1st render + every re render
  
//   useEffect(function(){
//     console.log("Mounting count 2");
//     },[count2]); // this will be called only once
    

  // return (
  //   <div className="App">
      
        
  //       <Products cart={cart} addTocart={addTocart} removeFromCart={removeFromCart}/>
        {/* <div>
          {count1}
        </div>
        <div>
          {count2}
        </div>
        <button onClick={increment1}>Click</button>
        <button onClick={increment2}>Click</button> */}
    {/* </div>
  ); */}
}

export default App;


// Mounting is the first time a component is loaded
// Rerendering is when a component is loaded beacuse of Rerendering from a state variable

//In useEffect
// empty [] means the function is called only on mounting

// no dependency array means the function is called on Mounting + Rerendering

// the dependency array can take a state variable in the component
// and it can take an prop coming from the parent component
// which ideally should be a state variable in the parent

// whenver the value of any dependency changes call the function in useEffect

