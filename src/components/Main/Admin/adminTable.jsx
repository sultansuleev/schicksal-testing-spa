import React, {Fragment} from 'react';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {NavLink, Route, useHistory} from "react-router-dom";
import {Button, Col, Form, Row} from "react-bootstrap";

const Sidebar = () => {

    return (
        <Fragment>
            <div className="jumbotron admin-table h-100">
                <div className="row">
                    <div>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Control placeholder="First name"/>
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Last name"/>
                                </Col>
                                <Col>
                                    <Button variant={"light"}>Add
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
                <p className="lead"></p>
                <div className="my-4">
                    <div className="row">
                        <div className="col-12 table-responsive">
                            <table className="table text-white">
                                <thead>
                                <tr className="text-uppercase">
                                    <th scope="col">Col</th>
                                    <th scope="col">Col</th>
                                    <th scope="col">Col</th>
                                    <th scope="col">Col</th>
                                    <th scope="col">Col</th>
                                    <th scope="col" className="text-right">Operations</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td scope="col">data
                                    </td>
                                    <td scope="col">data
                                    </td>
                                    <td scope="col">data
                                    </td>
                                    <td scope="col">data
                                    </td>
                                    <td scope="col">data
                                    </td>
                                    <td scope="col" className="text-right">
                                        kek
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Sidebar;