import React from "react";
import './Navbar.css'

export default function Navbar(props) {
    return (
        <nav className="nav-container">
            <div className="nav--logo_flexbox">
                <img className="nav--logo" src = '../../../public/Troll Face.png' />
                <p className="nav--site_name">{props.site_name}</p>
            </div>
            <div>
                <p className="nav--project_name">{props.project_name}</p>
            </div>
        </nav>
    )
}


