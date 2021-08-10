import { Paper, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import useStyle from './style';
import {commerce} from '../../lib/commerce';
import { useSelector,useDispatch } from 'react-redux';
import {setToken} from '../../../redux/actions'
const steps = ['Shipping address', 'payment details']

const Checkout = () => {
  const classes = useStyle();
  const cart = useSelector(state => state.cart)
  const checkoutToken = useSelector(state => state.token)
  const dispatch = useDispatch();

  // làm sao để lấy được state của token ra để check với điều kiện

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id,{type: "cart"});
        console.log(token);
        dispatch(setToken(token));


      } catch (error) {
        
      }
    }
    generateToken();

  }, [])




    const [activeStep,setActiveStep] = useState(0)
    // active mà 0 thì in ra form địa chỉ : còn không thì in ra form thanh toán
    const Form = () => activeStep === 0 ? <AddressForm/> : <PaymentForm/>
    const Confirmation = () => (
        <div>
            Confirmation
        </div>
    )

    return (
        <>
        <div className={classes.toolbar} />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="h4" align="center">Checkout</Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {/* activestep bằng với độ dài của steps thì in ra confirmation còn ko thì in ra form address hoặc payment */}
            {activeStep === steps.length ? <Confirmation /> : checkoutToken &&  <Form />}
          </Paper>
        </main>
      </>
    )
}

export default Checkout
