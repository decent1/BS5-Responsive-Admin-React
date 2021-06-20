import React, { Component } from 'react';
import logo from '../../images/bootstrap-logo.svg';
import { Link } from 'react-router-dom';

class TopNavbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-primary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="" width={30} height={24} className="d-inline-block align-text-top" />
                            ERP App
                        </Link>
                        <button id="navbar-togler" className="navbar-toggler" type="button">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default TopNavbar;