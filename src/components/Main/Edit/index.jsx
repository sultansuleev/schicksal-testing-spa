import React, {Fragment,  useState, useEffect} from 'react';
import Helmet from 'react-helmet';
import CardService from '../../../service/spring-service';
import {Redirect} from "react-router-dom";

const Edit = () => {
    const [redirect, setRedirect] = useState(null);
    const [user, setUser] = useState({});
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    useEffect(() => {
        CardService.getCurrentUser().then(response => {
            setUser(response.data);
        });

        if (!user) setRedirect("/");
    }, []);

    if (redirect) {
        return <Redirect to={this.state.redirect}/>;
    }

    const onNameChangeSubmit = event => {
        CardService.changeName(user).then(r => {
            setUser(r.data)
        });
        event.preventDefault();
    }

    const onQuoteChangeSubmit = event => {
        CardService.changeQuote(user).then(r => {
            setUser(r.data)
        });
        event.preventDefault();
    }

    const onChangeQuote = event => {
        setUser({...user, quote: event.target.value});
    }

    const onChangeEmail = event => {
        setUser({...user, fullName: event.target.value});
    }

    const onChangeOldPassword = event => {
        setOldPassword(event.target.value);
    }

    const onChangeNewPassword = event => {
        setNewPassword(event.target.value);
    }

    const onPasswordChangeSubmit = event => {
        var copy = Object.assign({}, user, {password: oldPassword})
        changePass(copy, newPassword);
        event.preventDefault();
    }

    function changePass(inputData, newPass) {
        CardService.changePassword(inputData, newPass).then(r => {
            setUser(r.data)
        }).catch(error => {
            alert(error.response.data.message);
        });
    }

    return (
        <Fragment>
            <Helmet>
                <title>Edit Page</title>
            </Helmet>
            <div className="content-section text-center" style={{backgroundColor: '#fff', paddingTop: '100px'}}>
                <div className="container" style={{color: '#000'}}>
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <h2>Edit Profile</h2>
                            <div className="text-sub-con">
                                <img className="img-thumbnail rounded mb-4 " src="/images/avatar.png"
                                     alt="avatar" style={{width: '195px'}}/>
                                <form onSubmit={onNameChangeSubmit}  className={'mb-3'}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name"
                                               value={user.fullName}
                                               onChange={onChangeEmail}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary mr-5"
                                            aria-describedby="alreadyReg">Save Changes
                                    </button>
                                </form>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" id="email"
                                           aria-describedby="emailHelp" placeholder={user.email} disabled/>
                                </div>
                                <form  onSubmit={onPasswordChangeSubmit} className={'mb-3'}>
                                    <div className="form-group">
                                        <label htmlFor="pass">Old Password</label>
                                        <input type="password" className="form-control" id="pass"
                                               value={oldPassword}
                                               onChange={onChangeOldPassword}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="rePass">New Password</label>
                                        <input type="password" className="form-control" id="rePass"
                                               value={newPassword}
                                               onChange={onChangeNewPassword}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary mr-5"
                                            aria-describedby="alreadyReg">Save Changes
                                    </button>
                                </form>
                                <form onSubmit={onQuoteChangeSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Quote</label>
                                        <input type="text" className="form-control" id="name"
                                               value={user.quote}
                                               onChange={onChangeQuote}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary mr-5"
                                            aria-describedby="alreadyReg">Save Changes
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
);
};

export default Edit;