import React from "react";
import './Header.css';

export default function Header () {
    return (
        <header className="row">
            <div className="col">
                <h1>Lambda Eats</h1>
            </div>
            <div className="col">
                <nav>
                    <a href="#" className="btn">Home</a>
                    <a href="#" className="btn btn-danger">Order pizza</a>
                </nav>
            </div>
        </header>
    );
}