import React, {useContext} from 'react';
import {BrowserRouter as Router, Route, Switch, useHistory, withRouter} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import Edit from './Edit';

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path = "/login" >
                    <Login/>
                </Route>
                <Route exact path = "/register">
                    <Register/>
                </Route>
                <Route exact path={'/profile'} render={() => <Profile/>}/>
                <Route exact path="/edit"
                       render={() => <Edit/>}
                />
            </Switch>
        </main>
    );
};
export default withRouter(Main);