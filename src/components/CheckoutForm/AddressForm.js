import React from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider, useFormContext, Controller } from 'react-hook-form';
import FormInput from './CustomTextField';
import { useState, useEffect } from 'react';
import { commerce } from '../lib/commerce'
import { useSelector } from 'react-redux';

const AddressForm = () => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubs, setShippingSubs] = useState([]);
    const [shippingSub, setShippingSub] = useState('');
    const [shippingOptions, setshippingOptions] = useState([]);
    const [shippingOption, setshippingOption] = useState('');
    const methods = useForm();
    const checkoutToken = useSelector(state => state.token)

    // const countries = Object.entries(shippingCountries).map(([code,name]) => ({
    //     id: code,
    //     label: name

    // }))
    const countries = Object.entries(shippingCountries).map(([code, name]) => {
        return {
            id: code,
            label: name

        }
    })
    console.log(countries);
    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
        setShippingCountries(countries); // object chưa key và value các nc
        setShippingCountry(Object.keys(countries)[0]) //US
    }
    console.log(Object.entries(shippingCountries)); // ghép key và value thành 1 mảng từng cặp

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id)

    }, [])


    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form >
                    <Grid container spacing={3}>
                        <FormInput required name="first name" label="first name" />
                        <FormInput required name="Last name" label="Last name" />
                        <FormInput required name="Address" label="Address" />
                        <FormInput required name="Email" label="Email" />
                        <FormInput required name="city" label="city" />
                        <FormInput required name="zipcode" label="zipcode" />
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping country</InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                                {countries.map(country => (
                                    <MenuItem key={country.id} value={country.id}>
                                        {country.label}
                                    </MenuItem>
                                ))}

                            </Select>
                        </Grid>
                        {/* <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping sub</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    selectme
                                </MenuItem>

                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping options</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    selectme
                                </MenuItem>

                            </Select>
                        </Grid> */}

                    </Grid>
                </form>

            </FormProvider>
        </>
    )
}

export default AddressForm
