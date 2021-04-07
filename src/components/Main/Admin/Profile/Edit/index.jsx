import React, {Fragment} from 'react';
import Helmet from 'react-helmet';

const Edit = () => {
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
                                <form>
                                    <img className="img-thumbnail rounded mb-4 " src="/images/avatar.jpg"
                                         alt="avatar" style={{width: '195px'}}/>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name"
                                               placeholder="Qara Zhigit"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" className="form-control" id="email"
                                               aria-describedby="emailHelp" placeholder="qapqaraschka@gmail.com"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pass">Old Password</label>
                                        <input type="password" className="form-control" id="pass"
                                               placeholder="Old Password"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="rePass">New Password</label>
                                        <input type="password" className="form-control" id="rePass"
                                               placeholder="New Password"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary mr-5"
                                            aria-describedby="alreadyReg">Save Changes
                                    </button>
                                    <button type="submit" className="btn btn-danger"
                                            aria-describedby="alreadyReg">Cancel
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