import { useContext } from "react";
import CartContext from "../../Context/CartContext";

function AddToCart({product}){
    const {cart,addTocart,removeFromCart}=useContext(CartContext);
let quantity=cart[product.id]?cart[product.id].quantity:0;
    if(quantity>0)
    {
            return (
                <div>
                    <button onClick={()=>removeFromCart(product)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={()=>addTocart(product)}>+</button>
                </div>
            );
    }
    else
    {
        return (
            <div>
                    <button onClick={()=>addTocart(product)}>Add To Cart</button>
            </div>
        );
    }


}
export default AddToCart;