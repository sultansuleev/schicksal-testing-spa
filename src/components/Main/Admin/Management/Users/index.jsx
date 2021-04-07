import React, {Fragment} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";

const UsersManagement = () => {
    return (
        <Fragment>
            <div className="jumbotron bg-secondary admin-table h-100">
                <p className="lead">Users Management</p>
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
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col" className="text-right">Operations</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td scope="col">Asanov
                                    </td>
                                    <td scope="col">Usen
                                    </td>
                                    <td scope="col" className="text-right">
                                        <button type="submit" className="btn btn-primary mr-5"
                                                aria-describedby="alreadyReg">Edit
                                        </button>
                                        <button type="submit" className="btn btn-danger"
                                                aria-describedby="alreadyReg">Delete
                                        </button>
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

export default UsersManagement;