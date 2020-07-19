import React, {Component} from 'react';
import classes from './Drawer.module.css';

import Backdrop from '../../UI/Backdrop/Backdrop';

import {NavLink} from 'react-router-dom';

const links = [
    {
        to: '/',
        label: 'Список квизов',
        exact: true
    },
    {
        to: '/auth',
        label: 'Авторизация',
        exact: false
    },
    {
        to: '/quiz-creator',
        label: 'Создание квиза',
        exact: false
    }
];

class Drawer extends Component {

    handleClick = () => {
        this.props.onClose();
    }

    render(){
        const cls = [classes.Drawer];
        if(!this.props.isOpen) {
            cls.push(classes.close)
        }
        return (
            <React.Fragment>
                <nav className={cls.join(" ")}>
                    <ul>
                        {
                            links.map((link, index)=>{
                                return (
                                    <li key={index}>
                                        <NavLink 
                                            to={link.to} 
                                            exact={link.exact}
                                            activeClassName={classes.active}
                                            onClick={this.handleClick}
                                        >
                                            {link.label}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
            </React.Fragment>
        )
    }
}


export default Drawer;