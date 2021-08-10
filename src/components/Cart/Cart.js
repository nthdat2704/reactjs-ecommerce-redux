import React, { useEffect } from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyle from './style';
import { useDispatch } from 'react-redux';
import { setcart } from '../../redux/actions'
import { commerce } from '../lib/commerce';
import CartItem from './CartItem/CartItem'
import {Link} from 'react-router-dom'

const Cart = () => {
    const classes = useStyle();

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);



    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();
        dispatch(setcart(cart));
    }


    const EmptyCard = () => (
        <Typography variant='subtitle1'>You have no items</Typography>
    )
    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} />
                    </Grid>
                ))}
                <div className={classes.cardDetails}>
                    <Typography variant='h4'>
                        Subtotal: {cart.subtotal.formatted_with_symbol}
                    </Typography>
                    <div>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={()=>handleEmptyCart()} >Empty Card</Button>
                        <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Check out</Button>
                    </div>

                </div>


            </Grid>
        </>
    )
    if (!cart.line_items) return 'loading .'

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Your shopping cart</Typography>
            {!cart.line_items.length ? <EmptyCard /> : <FilledCart />}

        </Container>
    )
}

export default Cart
