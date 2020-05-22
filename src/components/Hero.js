import React from "react";
import './Hero.css';

export default function Hero (props) {
    const message = props.message;

    return (
        <div className="row">
            <section id="hero" className="col">
                <h2>{ message }</h2>
            </section>
        </div>
    );
}