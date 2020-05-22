import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';

import Header from './Header';
import Hero from './Hero';
import Products from './Products';
import Footer from './Footer';
import OrderForm from './OrderForm';
import orderFormSchema from '../validation/orderFormSchema';
import * as yup from 'yup';
import axios from 'axios';

const App = () => {
    const defaultOrderData = {
        // html select value
        size: 'small',
        
        // radio values
        sauce: '',

        // checkbox values
        toppingPepperoni: '',
        toppingSausage: '',
        toppingBacon: '',
        toppingOnions: '',
        toppingBellPepper: '',

        // text
        name: '',
        instructions: ''
    }

    let [orderData, setOrderData] = useState(defaultOrderData);
    let [disabled, setDisabled] = useState(true);


    function updateOrderData(key, value) {
        setOrderData({...orderData, [key]: value});
    }


    function inputOnChangeHandler (event) {
        const element = event.target;

        if (element.type === 'checkbox' && orderData[element.name]) {
            updateOrderData(element.name, '');
        } else {
            updateOrderData(element.name, element.value);
        }
        

        // compare with schema

        yup.reach(orderFormSchema, element.name)
            .validate(element.value)
            .then(valid => {
                setDisabled(false);
            })
            .catch(err => {
                setDisabled(true);
            });

    }

    function onSubmitHandler (event) {
        event.preventDefault();

    }

    return (
        <div className="container">
            <Header />

            <Switch>

                <Route exact path="/">
                    <Hero message="Your favorite food. Delivered while coding."/>
                    <Products />
                </Route>

                <Route path="/order">
                    <Hero message="Order pizza"/>
                    <OrderForm inputOnChangeHandler={inputOnChangeHandler} onSubmitHandler={onSubmitHandler} disabled={disabled} />
                </Route>

            </Switch>

            <Footer />
        </div>
    );
};
export default App;
