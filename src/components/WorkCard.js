import "./WorkCard.css"
import React from 'react';
import {NavLink} from "react-router-dom";

export default function WorkCard(props) {
    return (
        <div className="project-card">
            <img src={props.image} alt="image"/>
            <h2 className="title">{props.title}</h2>
            <div className="details">
                <p>{props.text}</p>
                <div className="src-btn">
                    <NavLink to={props.link} className="btn">View</NavLink>
                </div>
            </div>
        </div>
    );
}

// The actual rendering and display logic for the project cards are defined in the WorkCard component