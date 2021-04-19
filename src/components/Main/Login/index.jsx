import React, {Fragment, useState} from 'react';
import Helmet from 'react-helmet';
import {NavLink, useHistory} from 'react-router-dom';
import CardService from '../../../service/spring-service';

const Login = () => {
    let history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordChange = event =>{
        setPassword(event.target.value);
    }

    const handleSubmit = event =>{
        event.preventDefault();
        const inputData = {email, password};
        CardService.login(inputData)
            .then(async res=>{
                console.log("Pered PUSH");
                await history.push("/profile");
                console.log("Posle PUSH");
                window.location.reload();
            }).catch(error => {alert("Oshibka")});

    }

    return (
        <Fragment>
            <Helmet>
                <title>Sign In</title>
            </Helmet>
            <div className="content-section text-center" style={{backgroundColor: '#fff'}}>
                <div className="container" style={{color: '#000'}}>
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <h2>Sign In</h2>
                            <div className="text-sub-con">
                                <form  onSubmit = {handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" className="form-control" id="email"
                                               aria-describedby="emailHelp" value = {email} placeholder="Enter email" onChange = {handleEmailChange}/>
                                        <small id="emailHelp" className="form-text text-muted">We'll never share
                                            your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pass">Password</label>
                                        <input type="password" className="form-control" id="pass" value = {password} onChange = {handlePasswordChange}
                                               placeholder="Password"/>
                                    </div>
                                    <button type="submit" className="btn btn-success"
                                            aria-describedby="alreadyReg">Login
                                    </button>
                                    <small id="alreadyReg" className="form-text text-muted">
                                        Not registered yet? &nbsp;
                                        <NavLink to='/register'>
                                            Solve it as soon as possible
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

export default Login;