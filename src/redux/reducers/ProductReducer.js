const initState = [

];
const productReducer = (state = initState, action) => {
    const {type,payload} = action;
    switch(type){
        case "setproducts":
        return state = payload;
        default:
        return state;
    }
}
export default productReducer;