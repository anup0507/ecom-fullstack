import { omit, Omit } from "lodash";

function CartReducer(state={items:{}},action)
{
    switch(action.type)
    {
        case "ADD_TO_CART":{
            console.log("ADD To CART Callled!!!",action.payload);
            const product=action.payload;
            if(state.items[product.id])
            {
                return {
                    ...state,items:{
                        ...state.items,[product.id]:{
                            ...state.items[product.id],
                            quantity:state.items[product.id].quantity+1    
                        }

                        }
                    };
            }
            else
            {
                return {
                    ...state,items:{
                        ...state.items,[product.id]:{
                            ...product,
                            quantity:1
                        }
                    }
                };
            }
            
        }
        case "REMOVE_FROM_CART":
        {
            const product=action.payload;
            console.log("REMOVE from Cart called!!!!",action.payload);
            if(state.items[product.id]?.quantity<=1)
            {
                return {
                    ...state,
                    items:omit(state.items,[product.id])
                    }
            }
            else
            {
                    return {
                        ...state,items:{
                            ...state.items,[product.id]:{
                                ...product,
                                quantity:state.items[product.id].quantity-1
                            }
                        }
                    }
            }
            
        }
        default:{
            return state;
        }
    }
}
export default CartReducer;