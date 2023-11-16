import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    const [activeLink, setActiveLink] = useState('')

    useEffect(() => {
        setActiveLink(window.location.pathname)
    }, [])

    const handleClicl = (link) => {
        setActiveLink(link)
    }

    return (
        <div className="Menu">
            <nav className="navbar">

                <ul>
                    <li className={`list $(activeLink === '/' ? 'active' : '')`}>
                        <Link
                            aria-current="page"
                            to="/"
                            onClick={() => handleClicl('/')}
                        >
                            <h1 className="text-label">Cours</h1>
                        </Link>
                    </li>
                    <li className={`list $(activeLink === '/' ? 'active' : '')`}>
                        <Link
                            aria-current="page"
                            to="/"
                            onClick={() => handleClicl('/')}
                        >
                            <span className="text-label">Home</span>
                        </Link>
                    </li>
                    <li className={`list $(activeLink === '/' ? 'active' : '')`}>
                        <Link 
                            to="/todo"
                            onClick={() => handleClicl('/todo')}
                        >
                            <span className="text-label">To Do</span>
                        </Link>
                    </li>
                    <li>

                    </li>
                    <li>
                        
                    </li>
                </ul>

            </nav>
        </div>
    );
}

export default Menu;