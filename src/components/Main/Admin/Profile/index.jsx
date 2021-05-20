import React, {Fragment, useEffect, useState} from 'react';
import {NavLink, Redirect} from "react-router-dom";
import CardService from "../../../../service/spring-service";

const AdminProfile = () => {
    const [redirect, setRedirect] = useState(null);
    const [user, setUser] = useState({});

    useEffect(() => {
        CardService.getCurrentUser().then(response => {
            setUser(response.data);
        });

        if (!user) setRedirect("/");
    }, []);

    if (redirect) {
        return <Redirect to={this.state.redirect}/>;
    }

    return (
        <Fragment>
            <div className="content-section text-center"
                 style={{backgroundColor: '#fff', paddingTop: '100px', paddingBottom: '100px'}}>
                <div className="container" style={{color: '#000'}}>
                    <div className="row">
                        <div className="col-lg-8 mx-auto" style={{position: 'relative'}}>
                            <h2>My Profile</h2>
                            <div className="d-flex align-items-center justify-content-center edit-cust-profile">
                                <NavLink to='/edit' className="d-flex flex-row align-items-center"
                                         style={{fontSize: '21px'}}>
                                    Edit
                                    <img src="/images/icon-edit.svg" className="ml-2" style={{width: '20px'}}
                                         alt="edit"/>
                                </NavLink>
                            </div>
                            <div className="text-sub-con d-flex flex-row">
                                <img className="img-thumbnail rounded mb-4 " src="/images/avatar.png" alt="avatar"
                                     style={{width: '195px'}}/>
                                <div className="float-right" style={{width: 'max-content'}}>
                                    <h2>{user.fullName}</h2>
                                    <p>{user.university}, {user.location}</p>
                                    <i>"{user.quote}"</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default AdminProfile;