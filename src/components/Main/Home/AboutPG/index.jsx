import React from 'react';

const AboutPG = () => {
    return (
        <section id="about" className="content-section text-center" style={{backgroundColor: '#fff'}}>
            <div className="container" style={{color: '#000'}}>
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <h2>About us</h2>
                        <div className="text-sub-con">
                            <p className="sub-p">
                                When you work with us, you are part of the student team.
                                All aspects of our testing process are integrated, iterative and flexible.
                            </p>
                            <p>
                                Our approach combines control, validation and support to create exceptional
                                tests.
                                Each test can enable the student to become better at something.
                                Therefore, we help to implement the tests that their teachers would create to
                                pass it.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPG;