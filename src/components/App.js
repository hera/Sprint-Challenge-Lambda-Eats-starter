import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import './App.css';

import Header from './Header';
import Hero from './Hero';
import Products from './Products';
import Footer from './Footer';
import OrderForm from './OrderForm';

const App = () => {
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
                    <OrderForm />
                </Route>

            </Switch>

            <Footer />
        </div>
    );
};
export default App;
