const cartReducer = (state = {}, action) => {
    const {type,payload} = action;
    switch(type){
        case "setcart":
            return state = payload;
        default:
            return state;
    }
    
}
export default cartReducer;