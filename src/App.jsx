import React, {Fragment, Component, useState, useEffect} from 'react';
import Header from './components/Header/index';
import Main from './components/Main/index';
import Footer from './components/Footer/index';

export const App = () => {

    const [user, setUser] = useState("");

    useEffect(() => {
        setUser(localStorage.getItem("token"));
    }, [])

    return(
        <Fragment>
            <Header token={user} />
            <Main token={user} />
            <Footer/>
        </Fragment>
    );
}