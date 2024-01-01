import React, {useState} from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

export default function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)

    return (
        <div className={"header"}>
            <Link to="/">
                <h1>Gunel Aliyeva☆</h1>
            </Link>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/project">Project</Link></li>
                <li><Link to="/cards">Cards</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes className="close-icon" size={25} style={{color: "white"}}/>)
                    : (<FaBars className="menu-icon" size={25} style={{color: "white"}}/>)
                }
            </div>
        </div>
    );
}