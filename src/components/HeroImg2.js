import "./HeroImg2.css"
import React from 'react';

export default function HeroImg2(props) {
    return (
        <div className="hero-img2">
            <div className="heading">
                <h1>{props.header}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    );
}