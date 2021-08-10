import React from 'react';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart'
import Navbar from './components/Navbar/Navbar';
import Checkout from './components/CheckoutForm/Checkout/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Products />
                    </Route>
                    <Route exact path="/cart">
                        <Cart />
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout />
                    </Route>
                </Switch>
            </Router>

        </div>
    )
}

export default App
