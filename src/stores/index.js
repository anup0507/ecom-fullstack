import { createStore,combineReducers,applyMiddleware } from "redux";
import CartReducer from "./Cart";
import CategoriesReducer from "./Categories";
import { thunk } from "redux-thunk";

const reducers=combineReducers({
    cart:CartReducer,
    categories:CategoriesReducer
});
let store=createStore(reducers,applyMiddleware(thunk));
 export default store;