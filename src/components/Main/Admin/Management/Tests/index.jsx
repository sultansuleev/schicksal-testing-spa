import React, {Fragment, useEffect, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import CardService from '../../../../../service/spring-service';

const TestsManagement = () => {

    const [tests, setTests] = useState([]);
    const [quiz, setQuiz] = useState("");
    const [correctAns, setCorrectAns] = useState("");
    const [firstAns, setFirstAns] = useState("");
    const [secondAns, setSecondAns] = useState("");
    const [thirdAns, setThirdAns] = useState("");
    const [fourthAns, setFourthAns] = useState("");
    const [reload, setReload] = useState(0);

    useEffect(() => {
        CardService.getCards().then(r => {
            setTests(r.data);
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

    const onQuizChange = (e) => {
        setQuiz(e.target.value);
    }

    const onCorrectAnsChange = (e) => {
        setCorrectAns(e.target.value)
    }

    const onFirstAnsChange = (e) => {
        setFirstAns(e.target.value)
    }

    const onSecondAnsChange = (e) => {
        setSecondAns(e.target.value)
    }

    const onThirdAnsChange = (e) => {
        setThirdAns(e.target.value)
    }

    const onFourthAnsChange = (e) => {
        setFourthAns(e.target.value)
    }

    const handleAdd = (e) => {
        e.preventDefault();

        CardService.addCards(quiz, correctAns, firstAns, secondAns, thirdAns, fourthAns)
            .then(r => {
                setTests([...tests, r.data])
                setQuiz("")
                setCorrectAns("")
                setFirstAns("")
                setSecondAns("")
                setThirdAns("")
                setFourthAns("")
            });
    }

    const deleteTest = (card) => {
        CardService.deleteTest(card).then(r => {
            let array = [...tests];
            let index = array.indexOf(card);
            if (index !== -1) {
                array.splice(index, 1);
                setTests(array)
            }
        })
    }

    return (
        <Fragment>
            <div className="jumbotron bg-secondary admin-table h-100" >
                <p className="lead">Tests Management</p>
                <div className="row">
                    <div>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Control placeholder="Question" onChange={onQuizChange}
                                                  value={quiz}/>
                                </Col>
                                <Col>
                                    <Form.Control type={"email"} placeholder="Correct Answer" onChange={onCorrectAnsChange}
                                                  value={correctAns}/>
                                </Col>
                                <Col>
                                    <Form.Control placeholder="First Answer"
                                                  onChange={onFirstAnsChange}
                                                  value={firstAns}/>
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Second Answer" onChange={onSecondAnsChange}
                                                  value={secondAns}/>
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Third Answer" onChange={onThirdAnsChange}
                                                  value={thirdAns}/>
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Fourth Answer" onChange={onFourthAnsChange}
                                                  value={fourthAns}/>
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
                                    <th scope="col">Question</th>
                                    <th scope="col">Answer</th>
                                    <th scope="col">First Answer</th>
                                    <th scope="col">Second Answer</th>
                                    <th scope="col">Third Answer</th>
                                    <th scope="col">Fourth Answer</th>
                                    <th scope="col" className="text-right">Operations</th>
                                </tr>
                                </thead>
                                <tbody>
                                {tests.map(card => (
                                    <tr >
                                        {console.log(card)}
                                        <td scope="col">{card.question}
                                        </td>
                                        <td scope="col">{card.correctAns}
                                        </td>
                                        <td scope="col">{card.firstAns}
                                        </td>
                                        <td scope="col">{card.secondAns}
                                        </td>
                                        <td scope="col">{card.thirdAns}
                                        </td>
                                        <td scope="col">{card.fourthAns}
                                        </td>
                                        <td scope="col" className="text-right">
                                            <Button variant={"danger"}
                                                    onClick={() => deleteTest(card)}>Delete</Button>
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

export default TestsManagement;