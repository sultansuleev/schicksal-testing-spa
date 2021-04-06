import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header className="navbar navbar-expand-lg navbar-light fixed-top well">
            <div className="container">
                <NavLink to='/' activeClassName="nav-link active" className="navbar-brand d-flex flex-row align-items-center">
                    <img src="/images/Entropy_logo.png" className="d-inline-block align-top pr-3" alt=""
                         style={{filter: 'grayscale(100%)', width: '60px'}}/>
                        Schicksal Testing
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to='/login' activeClassName="nav-link active" className="nav-link">
                                Auth
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/profile' activeClassName="nav-link active" className="nav-link">
                                Profile
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/profile' activeClassName="nav-link active" className="nav-link">
                                Admin
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;