import { useContext } from "react";
import CartContext from "../../Context/CartContext";

function Cart()
{
    const {cart}=useContext(CartContext);
    let cartList=cart?Object.values(cart):[];
    console.log("inside cart :",cartList);
    return (
        <div className="cart">
            <ul>
                {cartList.map((item)=>{
                    return (
                        <li>{item.title}-{item.quantity}</li>
                    );
                })}
            </ul>
        </div>
    );
}
export default Cart;