import React, {Fragment, useEffect, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import CardService from '../../../../../service/spring-service';

const UsersManagement = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [university, setUniversity] = useState("");
    const [location, setLocation] = useState("");
    const [users, setUsers] = useState([]);
    const [reload, setReload] = useState(0);

    useEffect(() => {
        CardService.getUsers().then(r => {
            setUsers(r.data);
        })
    }, [reload]);

    const handleSubmitRole = async (data) => {
        let user_id = data.id;
        let role_id = 1;
        const inputData = {user_id, role_id};

        await CardService.assignRole(inputData).then( r =>
            setReload(Math.random)
        );
    }

    const onNameChange = (e) => {
        setFullName(e.target.value);
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const onUniversityChange = (e) => {
        setUniversity(e.target.value)
    }

    const onLocationChange = (e) => {
        setLocation(e.target.value)
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleAdd = (e) => {
        e.preventDefault();

        CardService.addUser(email, password, fullName, university, location)
            .then(r => {
                setUsers([...users, r.data])
                setFullName("")
                setPassword("")
                setEmail("")
                setUniversity("")
                setLocation("")
            });
    }

    const deleteUser = (user) => {
        CardService.deleteUser(user).then(r => {
            let array = [...users];
            let index = array.indexOf(user);
            if (index !== -1) {
                array.splice(index, 1);
                setUsers(array)
            }
        })
    }

    return (
        <Fragment>
            <div className="jumbotron bg-secondary admin-table h-100" >
                <p className="lead">Users Management</p>
                <div className="row">
                    <div>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Control placeholder="Full Name" onChange={onNameChange}
                                                  value={fullName}/>
                                </Col>
                                <Col>
                                    <Form.Control type={"email"} placeholder="Email" onChange={onEmailChange}
                                                  value={email}/>
                                </Col>
                                <Col>
                                    <Form.Control type={"password"} placeholder="Password"
                                                  onChange={onPasswordChange}
                                                  value={password}/>
                                </Col>
                                <Col>
                                    <Form.Control placeholder="University" onChange={onUniversityChange}
                                                  value={university}/>
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Location" onChange={onLocationChange}
                                                  value={location}/>
                                </Col>
                                <Col>
                                    <Button variant={"light"} onClick={handleAdd}>Add
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
                                    <th scope="col">FullName</th>
                                    <th scope="col">Email</th>
                                    <th scope="col" className="text-right">Operations</th>
                                </tr>
                                </thead>
                                <tbody>
                                {users.map(user => (
                                    <tr >
                                        <td scope="col">{user.fullName}
                                        </td>
                                        <td scope="col">{user.email}
                                        </td>
                                        <td scope="col" className="text-right">
                                            <Button variant={"danger"}
                                                    onClick={() => deleteUser(user)}>Delete</Button>
                                            {user.roles.filter(e => e.role === "ROLE_ADMIN").length > 0?
                                                <Button variant={"danger"}
                                                        onClick={() => {handleSubmitRole(user)}}>Remove Admin Rights</Button>
                                                :
                                                <Button variant={"success"}
                                                        onClick={() => {handleSubmitRole(user)}}>Give Admin Rights</Button>
                                            }
                                        </td>
                                    </tr>
                                ))}
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