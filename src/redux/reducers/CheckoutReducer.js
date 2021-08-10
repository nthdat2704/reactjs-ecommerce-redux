
const CheckoutReducer = (state = null,action) => {

    const {type,payload} = action;
    switch (type) {
        case "setToken":
            return payload;
      
    
        default:
            return state;
    }

}


export default CheckoutReducer
