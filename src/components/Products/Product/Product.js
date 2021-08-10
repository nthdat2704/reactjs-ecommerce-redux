import React, { useEffect } from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyle from './style';
import { useSelector,useDispatch } from 'react-redux';
import { commerce } from '../../lib/commerce';
import {setcart} from '../../../redux/actions'

const Product = ({product}) => {
    
const dispatch = useDispatch();

    const handleAddToCart = async (productId , quantity) => {
        const item = await commerce.cart.add(productId,quantity);
        dispatch(setcart(item.cart));
    }

    const classes = useStyle();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary" />

            </CardContent>

                <CardActions disableSpacing className={classes.CardActions}>
                    <IconButton aria-label="Add to cart" onClick={() => handleAddToCart(product.id,1)}>
                        <AddShoppingCart  />
                    </IconButton>
                </CardActions>
        </Card>
    )
}

export default Product
