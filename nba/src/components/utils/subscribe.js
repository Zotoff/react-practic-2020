import React, { Component } from 'react';
import axios from 'axios';
import {URL_SUBS} from './paths';

export default class Subscriptions extends Component {
    state = {
        email: '',
        error: false,
        success: false,
        alreadyIn: false
    }

    onChangeInput = (event) => {
        console.log('Change input');
        this.setState({
            email: event.target.value
        })
    }

    saveSubscription = (email) => {
        axios.get(`${URL_SUBS}?email=${email}`)
        .then(response=>{
            if(!response.data.length) {
                axios(URL_SUBS, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    data: JSON.stringify({email})
                }).then(response => {
                    this.setState({
                        email: '',
                        success: true
                    });
                    this.clearMessages();
                })
            } else {
                this.setState({
                    email: '',
                    alreadyIn: true
                });
                this.clearMessages();
            }
        })
    }

    clearMessages = () => {
        setTimeout(()=>{
            this.setState({
                error: false,
                success: false,
                alreadyIn: false
            })
        }, 2000)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let email = this.state.email;
        let regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(regex.test(email)) {
            this.saveSubscription(email);
        } else {
            this.setState({error: true})
            this.clearMessages();
        }

    }

    render() {
        const state = this.state;
        return (
            <div className="subcribe_panel container">
                <h3>Subscribe to use</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                        type="text" 
                        placeholder="mail@gmail.com" 
                        value={state.email} 
                        onChange={this.onChangeInput}
                        />
                        <div className={state.error ? "error show" : "error"}>Check your email</div>
                        <div className={state.success ? "success show" : "success"}>Thanks for subscribing</div>
                        <div className={state.alreadyIn ? "success show" : "success"}>You are already in</div>
                    </form>
                </div>
                <small>
                    Lorem ipsum
                </small>
            </div>
        )
    }
}
