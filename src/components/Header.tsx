import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar custom-navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/gigs">
                    <img
                        src="https://s3-eu-west-1.amazonaws.com/assets.gigable/customer-portal/gigable-logo.svg"
                        alt="logo-gigable"
                        width="115"
                        height="38"
                    />
                </Link>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" to="/gigs">
                        Gigs
                    </Link>
                </div>
            </div>
            <Link role="button"
                to=""
                className="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </Link>
        </nav>
    )
}

export default Header;
