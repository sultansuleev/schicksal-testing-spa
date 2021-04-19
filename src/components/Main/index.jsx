import React, {useContext} from 'react';
import {BrowserRouter as Router, Route, Switch, useHistory, withRouter} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import Edit from './Edit';
import Sidebar from './Admin/SideBar';
import CardService from "../../service/spring-service";

const Main = () => {
    let history = useHistory();
    return (
        <main>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path = "/login" >
                    <Login/>
                </Route>
                <Route exact path = "/register">
                    <Register addUsr={(user)=>{
                        console.log(typeof user);
                        CardService.register(user)
                            .then(res=>{if(res.status===200){
                                history.push("/login");
                            }});}}/>
                </Route>
                <Route exact path={'/profile'} render={() => <Profile/>}/>
                <Route exact path="/edit"
                       render={() => <Edit/>}
                />
                <Route exact path="/admin"
                       render={() => <Sidebar/>}
                />
            </Switch>
        </main>
    );
};
export default withRouter(Main);