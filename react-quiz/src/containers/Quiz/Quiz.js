import React, { Component } from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import axios from '../../axios/axios-quiz';

export default class Quiz extends Component {
    state = {
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
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

    async componentDidMount(){
        try {
            const response = await
        } catch (error) {
            console.log(error)
        }
    }

    onAnswerClickHandler = (answerId) => {
        if(this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if(this.state.answerState[key] === 'success'){
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion];

        const results = this.state.results;

        if(question.rightAnswerId === answerId) {
            if(!results[question.id]) {
                results[question.id] = 'success'
            }

            this.setState({
                answerState: {
                    [answerId]: 'success'
                },
                results
            })

            const timeout = window.setTimeout(()=>{
                // Check whether the poll is ended
                if(this.isQuizFinished()){
                    this.setState({
                        isFinished: true
                    })
                }else{
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout();
            }, 1000)
            
        } else {
            results[question.id] = 'error';
            this.setState({
                answerState: {
                    [answerId]: 'error',
                    results
                }
            })

        }
      
    }

    isQuizFinished(){
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    retryHandler = () => {
        this.setState({
            isFinished: false,
            activeQuestion: 0,
            answerState: null,
            results: {}
        })
    }



    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>{this.state.title}</h1>
                    {
                        this.state.isFinished ? 
                        <FinishedQuiz 
                            results={this.state.results}
                            quiz={this.state.quiz}
                            onRetry={this.retryHandler}
                        />
                        : 
                        <ActiveQuiz 
                            answers={this.state.quiz[this.state.activeQuestion].answers}
                            question={this.state.quiz[this.state.activeQuestion].question}
                            onAnswerClick={this.onAnswerClickHandler}
                            quizLength={this.state.quiz.length}
                            answerNumber={this.state.activeQuestion + 1}
                            state={this.state.answerState}
                        />
                    }
                    
                </div>
            </div>
        )
    }
}
