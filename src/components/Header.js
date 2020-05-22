import React from "react";
import './Header.css';

import { Link } from 'react-router-dom';

export default function Header () {
    return (
        <header className="row">
            <div className="col">
                <h1>Lambda Eats</h1>
            </div>
            <div className="col">
                <nav>
                    <Link to="/" className="btn">Home</Link>
                    <Link to="/order" className="btn btn-danger">Order pizza</Link>
                </nav>
            </div>
        </header>
    );
}