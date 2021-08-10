import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons'; 
import logo from '../../assets/commerce.png'
import useStyle from './style';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
const Navbar = () => {
    const cart = useSelector(state => state.cart)
    const classes = useStyle();
    return (
        <>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                    <img src={logo} height="25px" className={classes.image}/>
                    Commerce.js
                </Typography>
                <div className={classes.grow}/>
                <div className={classes.button}/>
                <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                    <Badge badgeContent={cart.total_items} color="secondary">
                        <ShoppingCart/>
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
            
        </>
    )
}

export default Navbar
