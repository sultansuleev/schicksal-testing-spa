import React, {Fragment} from 'react';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {NavLink, Route, useHistory, BrowserRouter} from "react-router-dom";
import TestsManagement from "../Management/Tests";
import UsersManagement from "../Management/Users";
import AdminProfile from "../Profile";
import Edit from '../Profile/Edit';

const Sidebar = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <div className="content-section text-center d-flex" style={{paddingTop: '100px', paddingBottom: '50px'}}>
                    <div className="admin border-dark border-right h-100 col-2">
                        <div className="sidebar-heading mt-4 font-weight-bold text-uppercase">Admin Panel</div>
                        <div className="list-group list-group-flush mt-5 font-weight-bold">
                            <NavLink to={"/adminProfile"} activeClassName="nav-link active"
                                     className="nav-link">Admin Profiles</NavLink>
                            <NavLink to={"/management/users"} activeClassName="nav-link active"
                                     className="nav-link">Users Management</NavLink>
                            <NavLink to={"/management/tests"} activeClassName="nav-link active"
                                     className="nav-link">Tests Management</NavLink>
                        </div>
                    </div>

                    <div className="container-fluid p-0">
                        <Route exact path={"/adminProfile"} component={AdminProfile}/>
                        <Route exact path={"/management/users"} component={UsersManagement}/>
                        <Route exact path={"/management/tests"} component={TestsManagement}/>
                        <Route exact path={"/editAdminPage"} component={Edit}/>
                    </div>
                </div>
            </BrowserRouter>
        </Fragment>
    );
};

export default Sidebar;