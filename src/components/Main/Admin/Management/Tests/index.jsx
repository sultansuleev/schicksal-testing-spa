import React, {Fragment} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";

const TestsManagement = () => {
    return (
        <Fragment>
            <div className="jumbotron bg-secondary admin-table h-100">
                <p className="lead">Tests Management</p>
                <div className="row">
                    <div>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Control placeholder="Question"/>
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Answer"/>
                                </Col>
                                <Col>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label className="position-absolute cust-weight">Weight</Form.Label>
                                        <Form.Control as="select">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Button variant={"light"}>Add
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
                <div className="my-4">
                    <div className="row">
                        <div className="col-12 table-responsive">
                            <table className="table text-white">
                                <thead>
                                <tr className="text-uppercase">
                                    <th scope="col">Question</th>
                                    <th scope="col">Answer</th>
                                    <th scope="col">Weight</th>
                                    <th scope="col" className="text-right">Operations</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td scope="col">Kit, ty mamu mav?
                                    </td>
                                    <td scope="col">Mav
                                    </td>
                                    <td scope="col">5
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

export default TestsManagement;