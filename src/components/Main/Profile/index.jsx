import React, {Fragment} from 'react';
import Helmet from 'react-helmet';
import {NavLink} from "react-router-dom";

const Profile = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Profile Page</title>
            </Helmet>
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
                                <img className="img-thumbnail rounded mb-4 " src="/images/avatar.jpg" alt="avatar"
                                     style={{width: '195px'}}/>
                                    <div className="float-right" style={{width: 'max-content'}}>
                                        <h2>Qara Zhigit</h2>
                                        <p>IITU, Almaty, KZ</p>
                                        <i>"The wolf isn't the one who is the wolf, but the one who didn't act in
                                            Twilight."</i>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Profile;