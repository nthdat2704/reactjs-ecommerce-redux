import React, { useEffect } from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import useStyle from './style';
import { useSelector } from 'react-redux';
import { commerce } from '../lib/commerce';
import { useDispatch } from 'react-redux';
import {setproducts} from '../../redux/actions'
import {setcart} from '../../redux/actions'


const Products = () => {

    
const products = useSelector(state => state.products)
const cart = useSelector(state => state.cart);

const dispatch = useDispatch();

    const fetchProducts = async () =>{
        const {data} = await commerce.products.list();

        dispatch(setproducts(data));
    }
    const fetchCart = async () =>{
            dispatch(setcart(await commerce.cart.retrieve()))
        
    }
    
    useEffect(()=>{
        fetchProducts();
        fetchCart();

    },[])



    const classes = useStyle();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
            
        </main>
    )
}

export default Products
