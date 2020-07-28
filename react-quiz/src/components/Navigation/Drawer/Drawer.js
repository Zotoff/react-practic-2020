import React, {Component} from 'react';
import classes from './Drawer.module.css';

import Backdrop from '../../UI/Backdrop/Backdrop';

import {NavLink} from 'react-router-dom';

class Drawer extends Component {

    handleClick = () => {
        this.props.onClose();
    }

    renderLinks(links) {
        return links.map((link, index) => {
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

    render(){
        const cls = [classes.Drawer];

        if(!this.props.isOpen) {
            cls.push(classes.close)
        }

        const links = [
            {
                to: '/', label: 'Список квизов', exact: true
            },
            {
                to: '/auth', label: 'Авторизация', exact: false
            }
        ]

        if(this.props.isAuthenticated) {
            links.push(
                {
                    to: '/quiz-creator', label: 'Создать квиз', exact: false
                },
                {
                    to: '/logout', label: 'Выйти из системы', exact: false
                }
            )
        } else {

        }

        return (
            <React.Fragment>
                <nav className={cls.join(" ")}>
                    <ul>
                        {
                           this.renderLinks(links)
                        }
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
            </React.Fragment>
        )
    }
}


export default Drawer;