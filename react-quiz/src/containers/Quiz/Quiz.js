import React, { Component } from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

export default class Quiz extends Component {
    state = {
        activeQuestion: 0,
        quiz: [
            {
                question: 'Wie geht es dir?',
                rightAnswerId: 1,
                id: 1,
                answers: [
                    {text: 'Es geht mir gut', id: 1},
                    {text: 'Es geht mir schlecht', id: 2},
                    {text: 'Jein', id: 3}
                ]
            },
            {
                question: 'Was ist Apfel?',
                rightAnswerId: 1,
                id: 2,
                answers: [
                    {text: 'Es gist ein Apfel', id: 1},
                    {text: 'Es ist eine Wassermelone', id: 2},
                    {text: 'Jein', id: 3}
                ]
            }
        ],
        title: 'Ответьте на вопросы'
    }

    onAnswerClickHandler = (answerId) => {
        console.log('Answer Id is: ' + answerId);
        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>{this.state.title}</h1>
                    <ActiveQuiz 
                    answers={this.state.quiz[this.state.activeQuestion].answers}
                    question={this.state.quiz[this.state.activeQuestion].question}
                    onAnswerClick={this.onAnswerClickHandler}
                    quizLength={this.state.quiz.length}
                    answerNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        )
    }
}
