import React from 'react';
import classes from './AnswerItem.module.css';

const Answeritem = props => {
    return (
        <li className={classes.Answeritem} onClick={()=>props.onAnswerClick(props.answer.id)}>
            {
                props.answer.text
            }
        </li>
    )
}

export default Answeritem;