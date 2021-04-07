import React, {Fragment} from 'react';
import Helmet from 'react-helmet';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Sidebar from './SideBar';
import Profile from "../Profile";
import AdminProfile from "./AdminProfile";
import ManagementPG from "./ManagementPG";
import UsersManagement from "./UsersManagement";
import TestsManagement from "./TestsManagement";


const AdminPage = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Admin Panel</title>
            </Helmet>
            <div>
                <BrowserRouter>
                    <Switch>
                        {/*<Route exact path={'/adminProfile'} component={AdminProfile}/>*/}
                        {/*<Route exact path = "/management" >*/}
                        {/*    <ManagementPG/>*/}
                        {/*</Route>*/}
                        {/*<Route exact path = "/management/users">*/}
                        {/*    <UsersManagement/>*/}
                        {/*</Route>*/}
                        {/*<Route exact path={'/management/tests'} render={() => <TestsManagement/>}/>*/}

                    </Switch>
                </BrowserRouter>

            </div>
        </Fragment>
    );
};

export default AdminPage;