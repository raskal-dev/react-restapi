import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className="Menu">
            <nav className="navbar">

                <Link 
                to={'/'}
                aria-placeholder="Home"
                />

            </nav>
        </div>
    );
}

export default Menu;