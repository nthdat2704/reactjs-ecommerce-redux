import productReducer from "./ProductReducer";
import cartReducer from "./CartReducer";
import CheckoutReducer from "./CheckoutReducer";
import {combineReducers} from "redux";
const allReducers = combineReducers({
    products: productReducer,
    cart: cartReducer,
    token: CheckoutReducer
})
export default allReducers