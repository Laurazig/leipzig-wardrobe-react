import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="nav">
            <div id="leipzigWardHeader">Leipzig Wardrobe</div>
            <nav>
                <ul>
                    <li >
                        <Link to="/" className="liNav">HOME</Link>
                    </li>

                    <li className="liNav">
                        <Link to="/workshops" className="liNav">WORKSHOPS</Link>
                    </li>

                    <li className="liNav">
                        <Link to="/makers" className="liNav">MAKERS</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation