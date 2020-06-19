import React, { Component } from 'react';
import axios from 'axios';
import {URL_TEAMS} from '../utils/paths';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import TeamsModal from './modal';

export default class Teams extends Component {
    state = {
        teams: [],
        filtered: [],
        team: null,
        keyword: ''
    }

    componentDidMount(){
        axios.get(URL_TEAMS)
        .then(response => {
            this.setState({
                teams: response.data,
                filtered: response.data
            })
        })
    }

    clearModal = () => {
        this.setState({
            team: null
        })
    }

    showModalTeam = (data) => {
        this.setState({
            team: data
        })
    }

    renderList = (filtered) => (
        filtered.map((item,index)=>(
            <CSSTransition
                key={index}
                timeout={500}
                classNames="fade"
            >
                <div className="team_item">
                    <img alt={item.name} src={`/images/teams/${item.logo}`}/>
                </div>
            </CSSTransition>
        ))
    )

    searchTerms = (event) => {
        const keyword = event.target.value;
        if(keyword !== '') {
            const list = this.state.teams.filter(item => {
                return item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
            });
            this.setState({
                filtered: list,
                keyword
            })
        } else {
            this.setState({
                filtered: this.state.teams,
                keyword
            })
        }
    }

    render() {
        return (
            <div className="teams_component container">
                <div className="team_input">
                    <input
                        type="text"
                        placeholder="search for the team"
                        onChange={(e)=>{this.searchTerms(e)}}
                        value={this.state.keyword}
                    />
                </div>
                <div className="teams_container">
                    <TransitionGroup component="span">
                        {this.renderList(this.state.filtered)}
                    </TransitionGroup>
                </div>
                <TeamsModal team={this.state.team} clearNodal={()=>{this.clearModal()}}/>
            </div>
        )
    }
}
