export const setproducts = (products) => {
    return {
        type: "setproducts",
        payload: products
    }
}
export const setcart = (cart) => {
    return {
        type: "setcart",
        payload: cart
    }
}
export const setToken = (token) => {
    return {
        type: "setToken",
        payload: token
    }
}