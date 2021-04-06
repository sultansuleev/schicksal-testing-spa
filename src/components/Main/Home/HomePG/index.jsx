import React from 'react';
var sectionStyle = {
    backgroundImage: "url(" + '/images/Layer8.png' + ")",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover"
};

const HomePG = () => {
    return (
        <section id="home" className="masthead" style={sectionStyle}>
            <div className="intro-body" style={{color: '#Fff'}}>
                <div className="container" style={{color: '#FFffff', paddingTop: '50px'}}>
                    <div className="row">
                        <div className="col-lg-8 mx-auto head-col con-1-content">
                            <img src="/images/Ellipse%201%20copy%2011.png" alt="Ellipse"/>
                            <h1 className="brand-heading">Working With Schicksal Testing</h1>
                            <p className="intro-text">
                                We’ve been helping students to learn and grow their knowledge. We help you
                                to fill the gap between courses requirements and your knowledge.
                            </p>
                            <img src="/images/Shape%201.png" alt="Shape" className="shape-anim"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePG;