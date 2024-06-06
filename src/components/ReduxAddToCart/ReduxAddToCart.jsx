import { useDispatch,useSelector } from "react-redux";

function ReduxAddToCart({product}){
    let dispatch=useDispatch();
    //re-rendering of all carts not happening,
    // here selector is simply returning only quantity and and thus avoiding re-rendering that happens  
    let quantity=useSelector((state)=>{
        return state.cart.items[product.id]?.quantity||0;       
    });
    console.log("RATC",product.id);
    function increment()
    {
        dispatch({type:"ADD_TO_CART",payload:product});
    }
    function decrement()
    {
        dispatch({type:"REMOVE_FROM_CART",payload:product});
    }
    // re-rendering happens in this for all carts for all products
    // here we return state items and then getting data for quantity we want which asks for re-rendering

    // let item=useSelector((state)=>{
    //     return state.items;
    // })
    // let quantity=item[product.id]?.quantity?item[product.id].quantity:0;
    if(quantity>0)
    {
            return (
                <div>
                    <button onClick={decrement}>-</button>
                    <span>{quantity}</span>
                    <button onClick={increment}>+</button>
                </div>
            );
    }
    else
    {
        return (
            <div>
                    <button onClick={increment}>Add To Cart</button>
            </div>
        );
    }


}
export default ReduxAddToCart;