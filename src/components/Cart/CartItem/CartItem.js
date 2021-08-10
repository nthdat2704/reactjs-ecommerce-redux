import React from 'react'
import {Typography, Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core'
import useStyle from './style'
import { useDispatch,useSelector } from 'react-redux';
import { setcart } from '../../../redux/actions'
import { commerce } from '../../lib/commerce';
const CartItem = ({ item } ) => {
    const classes = useStyle();

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const handleUpdateCartQty = async (productId,quantity) => {
        const {cart} = await commerce.cart.update(productId,{quantity})
        dispatch(setcart(cart));
    }
    const handleRemoveFormCart = async (productId,quantity) => {
        const {cart} = await commerce.cart.remove(productId);
        dispatch(setcart(cart));
    }

    return (
        <Card>
            <CardMedia image={item.media.source} alt="image" className={classes.media}/>
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name} </Typography>
                <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={()=>handleUpdateCartQty(item.id,item.quantity - 1)} >-</Button>
                    <Typography>
                        {item.quantity}
                    </Typography>
                    <Button type="button" size="small" onClick={()=>handleUpdateCartQty(item.id,item.quantity + 1)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={()=>handleRemoveFormCart(item.id)}>Remove</Button>
            </CardActions>
            
        </Card>
    )
}

export default CartItem
