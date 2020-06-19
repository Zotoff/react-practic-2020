import React, { Component } from 'react';
import HomeSlider from './slider';
import Subscriptions from '../utils/subscribe';
import HomeArticles from './articles';
import Poll from '../utils/poll';

export default class Home extends Component {
    render() {
        return (
            <div>
                <HomeSlider />
                <Subscriptions />
                <div className="container">
                    <HomeArticles />
                    <Poll />
                </div>
            </div>
        )
    }
}
