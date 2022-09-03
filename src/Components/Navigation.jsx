import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="nav">
            <div id="leipzigWardHeader">Leipzig Wardrobe</div>
            <nav>
                <ul>
                    <li >
                        <NavLink to="/" className="liNav">HOME</NavLink>
                    </li>

                    <li className="liNav">
                        <NavLink to="/workshops" className="liNav">WORKSHOPS</NavLink>
                    </li>

                    <li className="liNav">
                        <NavLink to="/makers" className="liNav">MAKERS</NavLink>
                    </li>

                    {/* <NavLink to="howitworks" style={({ isActive }) => ({
                        color: isActive && "#FFFFFF", background: isActive && "#91C88A", borderRadius: isActive && "0.3rem", padding: isActive && "0.3rem", pointerEvents: isActive && "none"
                    })}>How it works</NavLink> */}
                </ul>
            </nav>
        </div>
    )
}

export default Navigation