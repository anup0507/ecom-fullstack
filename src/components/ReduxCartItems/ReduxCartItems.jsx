import { useSelector } from "react-redux";

function ReduxCartItems()
{
    let data=useSelector((state)=>{
        return state;
    });
    let cartList=data.cart.items?Object.values(data.cart.items):[];
    console.log(cartList);
    //let cartList=cart?Object.values(cart):[];
    console.log("inside cart :",cartList);
    if(cartList.length>0)
        {
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
        else
        {
            return 
            (
                <div></div>
            );
        }
    
}
export default ReduxCartItems;