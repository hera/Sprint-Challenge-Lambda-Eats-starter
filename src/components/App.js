import React from "react";
import './App.css';

import Header from './Header';
import Hero from './Hero';
import Products from './Products';
import Footer from './Footer';

const App = () => {
    return (
        <div className="container">
            <Header />
            <Hero message="Your favorite food. Delivered while coding."/>
            <Products />
            <Footer />
        </div>
    );
};
export default App;
