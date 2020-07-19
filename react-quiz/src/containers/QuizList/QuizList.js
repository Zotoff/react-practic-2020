import React, { Component } from 'react';
import classes from './QuizList.module.css';
import {NavLink} from 'react-router-dom';

export default class QuizList extends Component {
    state = {
        heading: 'Список тестов'
    }
    renderQuizes() {
        return [1,2,3].map((quiz, index)=>(
            <li key={index}>
                <NavLink to={'/quiz/' + quiz}>
                    Test {quiz}
                </NavLink>
            </li>
        ))
    }
    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>{this.state.heading}</h1>
                    <ul>
                        {this.renderQuizes()}
                    </ul>
                </div>
            </div>
        )
    }
}
