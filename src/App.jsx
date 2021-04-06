import React, {Fragment, Component, useState, useEffect} from 'react';
import Header from './components/Header/index';
import Main from './components/Main/index';
import Footer from './components/Footer/index';

export const App = () => {
    return(
        <Fragment>
            <Header/>
            <Main/>
            <Footer/>
        </Fragment>
    );
}