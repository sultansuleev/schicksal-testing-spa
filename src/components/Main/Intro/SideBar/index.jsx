import React, {Fragment} from 'react';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {NavLink, Route, useHistory, BrowserRouter} from "react-router-dom";
import Quiz from "../../Quiz";
import Rating from "../Rating";

const MainSidebar = (props) => {
    return (
        <Fragment>
            <BrowserRouter>
                <div className="content-section text-center d-flex" style={{paddingTop: '100px', paddingBottom: '50px'}}>
                    <div className="admin border-dark border-right h-100 col-2">
                        <div className="list-group list-group-flush mt-5 font-weight-bold">
                            <NavLink to={"/"} activeClassName="nav-link active"
                                     className="nav-link">Rating</NavLink>
                            {props.token && <NavLink to={"/quiz"} activeClassName="nav-link active"
                                                   className="nav-link">Write a quiz</NavLink>}

                        </div>
                    </div>

                    <div className="container-fluid p-0">
                        <Route exact path={"/"} component={Rating}/>
                        <Route exact path={"/quiz"} component={Quiz}/>
                    </div>
                </div>
            </BrowserRouter>
        </Fragment>
    );
};

export default MainSidebar;