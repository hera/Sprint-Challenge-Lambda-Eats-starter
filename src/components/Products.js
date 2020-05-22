import React from "react";
import './Products.css';
import productImage from '../images/product.png';

export default function Products () {
    return (
        <section id="Products" className="row">
            <div className="col-md-6 col-lg-4">
                <div className="product">
                    <img src={productImage} alt="pizza" />
                    <h4>Sicilian</h4>
                    <strong>$15.99</strong>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="product">
                    <img src={productImage} alt="pizza" />
                    <h4>Greek</h4>
                    <strong>$15.99</strong>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="product">
                    <img src={productImage} alt="pizza" />
                    <h4>Chicago</h4>
                    <strong>$15.99</strong>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="product">
                    <img src={productImage} alt="pizza" />
                    <h4>Hawaian</h4>
                    <strong>$15.99</strong>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="product">
                    <img src={productImage} alt="pizza" />
                    <h4>Mexican</h4>
                    <strong>$15.99</strong>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="product">
                    <img src={productImage} alt="pizza" />
                    <h4>Margherita</h4>
                    <strong>$15.99</strong>
                </div>
            </div>
            
        </section>
    );
}