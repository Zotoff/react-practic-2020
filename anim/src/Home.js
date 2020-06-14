import React, { Component } from 'react';
import Profile from './components/Profile';

export default class Home extends Component {
    state = {
        name: 'John',
        age: 23
    }
    render() {
        return (
            <div>
                Home
                <hr />
                <Profile {...this.state}/>
            </div>
        )
    }
}
