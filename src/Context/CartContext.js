import { createContext } from "react";
let CartContext=createContext({
    cart:{},
    addTocart:()=>{},
    removeFromCart:()=>{}
});
export default CartContext;

