import React, {Fragment, useState} from 'react';
import Helmet from 'react-helmet';
import {NavLink} from "react-router-dom";

const Register = ({addUsr}) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [uni, setUni] = useState("");
    const [location, setLocation] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const handleEmailChange = event =>{
        setEmail(event.target.value);
    }

    const handleUniChange = event =>{
        setUni(event.target.value);
    }

    const handleLocationChange = event =>{
        setLocation(event.target.value);
    }

    const handleNameChange = event =>{
        setName(event.target.value);
    }

    const handlePasswordChange = event =>{
        setPassword(event.target.value);
    }

    const handleRePasswordChange = event =>{
        setRePassword(event.target.value);
    }

    const handleSubmit = event =>{
        event.preventDefault();
        console.log(`Init ${password} and ${rePassword}`);
        if (password == rePassword) {
            const inputData = {email, fullName: name, password, university: uni, location: location};
            auth(inputData);
        }
    }

    async function auth(data){
        addUsr(data);
    }

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
                                <form onSubmit = {handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name"  placeholder="Enter name" value = {name} onChange = {handleNameChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" className="form-control" id="email" value = {email} onChange = {handleEmailChange}
                                               aria-describedby="emailHelp" placeholder="Enter email"/>
                                            <small id="emailHelp" className="form-text text-muted">We'll never share
                                                your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">University</label>
                                        <input type="text" className="form-control" id="uni" value = {uni} onChange = {handleUniChange}
                                               placeholder="Enter University"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Location</label>
                                        <input type="text" className="form-control" id="location" value = {location} onChange = {handleLocationChange}
                                               placeholder="Enter Location"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pass">Password</label>
                                        <input type="password" className="form-control" id="pass"
                                               placeholder="Password" value = {password} onChange = {handlePasswordChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="rePass">Confirm Password</label>
                                        <input type="password" className="form-control" id="rePass" value = {rePassword} onChange = {handleRePasswordChange}
                                               placeholder="Confirm Password"/>
                                    </div>
                                    <button type="submit" className="btn btn-success"
                                            aria-describedby="alreadyReg">Register
                                    </button>
                                    <small id="alreadyReg" className="form-text text-muted">
                                        Already have an account?&nbsp;
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