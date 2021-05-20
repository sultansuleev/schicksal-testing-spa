import React, {Fragment, useEffect, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import CardService from "../../../../service/spring-service";

const Rating = () => {
    const [res, setRes] = useState("");
    const [users, setUsers] = useState([]);
    const [reload, setReload] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        await CardService.getRes().then(r => {
            setRes(r.data);
            console.log(r.data);
        });

        CardService.getUsers().then(r => {
            setUsers(r.data);
            setLoading(false);
        })
    }, [reload]);

    return (
        <Fragment>
            <div className="jumbotron bg-secondary admin-table h-100">
                {loading ? <h1>loading...</h1> :
                    <>
                        <p className="lead">Rating</p>
                        <div className="my-4">
                            <div className="row">
                                <div className="col-12 table-responsive">
                                    <table className="table text-white">
                                        <thead>
                                        <tr className="text-uppercase">
                                            <th scope="col">FullName</th>
                                            <th scope="col">Rating</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {res.sort((a, b) => parseInt(b.result) - parseInt(a.result))
                                            .map(rate => (
                                                users.map(usr => (
                                                    <>
                                                        {(rate.user_id === usr.id) && (
                                                            <tr key={rate.id}>
                                                                <td scope="col">{usr.fullName}
                                                                </td>
                                                                <td scope="col">{rate.result}
                                                                </td>
                                                            </tr>
                                                        )}
                                                    </>
                                                ))
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </Fragment>
    );
};

export default Rating;