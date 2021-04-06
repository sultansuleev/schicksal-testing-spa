import React, {Fragment} from 'react';
import Helmet from 'react-helmet';
import {NavLink} from "react-router-dom";

const Register = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Sign Up</title>
            </Helmet>
            <div className="content-section text-center" style={{backgroundColor: '#fff'}}>
                <div className="container" style={{color: '#000'}}>
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <h2>Sign Up</h2>
                            <div className="text-sub-con">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Enter name"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" className="form-control" id="email"
                                               aria-describedby="emailHelp" placeholder="Enter email"/>
                                            <small id="emailHelp" className="form-text text-muted">We'll never share
                                                your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pass">Password</label>
                                        <input type="password" className="form-control" id="pass"
                                               placeholder="Password"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="rePass">Confirm Password</label>
                                        <input type="password" className="form-control" id="rePass"
                                               placeholder="Confirm Password"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary"
                                            aria-describedby="alreadyReg">Register
                                    </button>
                                    <small id="alreadyReg" className="form-text text-muted">
                                        Already have an account?
                                        <NavLink to='/login'>
                                            Sign In
                                        </NavLink>
                                    </small>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Register;