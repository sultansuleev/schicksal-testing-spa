import React, {Fragment} from 'react';
import Helmet from 'react-helmet';
import {NavLink, Route, Switch} from "react-router-dom";
import Sidebar from './SideBar';
import Home from "../Home";
import Login from "../Login";
import Register from "../Register";
import Profile from "../Profile";
import AdminProfile from "./AdminProfile";

const ManagementPG = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Admin Panel</title>
            </Helmet>
            <div>

            </div>
        </Fragment>
    );
};

export default ManagementPG;