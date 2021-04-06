import React, {Fragment} from 'react';
import Helmet from 'react-helmet';

import HomePG from "./HomePG";
import AboutPG from "./AboutPG";
import SevicesPG from "./ServicesPG";
import WhatWeDoPG from "./WhatWeDoPG";
import ContactPG from "./ContactPG";

const Home = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Main Page</title>
            </Helmet>
            <HomePG/>
            <AboutPG/>
            <SevicesPG/>
            <WhatWeDoPG/>
            <ContactPG/>
        </Fragment>
    );
};

export default Home;