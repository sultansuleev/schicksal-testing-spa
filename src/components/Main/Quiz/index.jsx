import React, {Fragment, useEffect, useState} from 'react';
import Helmet from 'react-helmet';
import {NavLink, Redirect, useHistory} from "react-router-dom";
import CardService from "../../../service/spring-service";

const Quiz = () => {
    const [tests, setTests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [user, setUser] = useState({});

    const formSubmit = async (id, score) => {
        let user_id = id;
        let result = score + 1;
        const inputData = {user_id, result};

        await CardService.sendTestRes(inputData).then(r =>
            console.log(r)
        );
    }

    const handleAnswerOptionClick = (id, ans) => {
        if (tests[id].correctAns === ans) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < tests.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            formSubmit(user.id, score).then(r => setShowScore(true));
        }
    };

    let history = useHistory();
    const updateData = async () => {
        await CardService.getCurrentUser().then(response => {
            setUser(response.data);
        });
        if (!user) history.push('/login')

        await CardService.generateTest().then(r => {
            setTests(r.data);
            setLoading(false);
            console.log(r.data, "Lorem");
        })
    }

    useEffect(() => {
        updateData();

        return() => {
            setTests([]);
            setLoading(true);
        }
    }, []);

    const Reset = () => {
        setScore(0);
        setShowScore(false);
        setUser({});
        setCurrentQuestion(0);

        updateData();
    }

    return (
        <Fragment>
            <Helmet>
                <title>Quiz</title>
            </Helmet>
            <div className="content-section text-center quiz-ave" style={{backgroundColor: '#fff', color: '#000000'}}>
                {loading ? <h1>loading...</h1> :
                    <Fragment>
                        {showScore ? (
                            <>
                                <div className='score-section'>
                                    You scored {score} out of {tests.length}
                                </div>
                                <button onClick={Reset} className="btn btn-light btn-quiz p-3 m-2">Try Again</button>
                            </>
                        ) : (
                            <>
                                <div className='question-section'>
                                    <div className='question-count'>
                                        <span>Question {currentQuestion + 1}</span>/{tests.length}
                                    </div>
                                    <div className='question-text'>{tests[currentQuestion].question}</div>
                                </div>
                                <div className='answer-section'>
                                    <button className="btn btn-light btn-quiz p-3 m-2"
                                        onClick={() => handleAnswerOptionClick(currentQuestion, tests[currentQuestion].firstAns)}>{tests[currentQuestion].firstAns}</button>
                                    <button className="btn btn-light btn-quiz p-3 m-2"
                                        onClick={() => handleAnswerOptionClick(currentQuestion, tests[currentQuestion].secondAns)}>{tests[currentQuestion].secondAns}</button>
                                    <button className="btn btn-light btn-quiz p-3 m-2"
                                        onClick={() => handleAnswerOptionClick(currentQuestion, tests[currentQuestion].thirdAns)}>{tests[currentQuestion].thirdAns}</button>
                                    <button className="btn btn-light btn-quiz p-3 m-2"
                                        onClick={() => handleAnswerOptionClick(currentQuestion, tests[currentQuestion].fourthAns)}>{tests[currentQuestion].fourthAns}</button>
                                </div>
                            </>
                        )}
                    </Fragment>}
            </div>
        </Fragment>
    );
};

export default Quiz;