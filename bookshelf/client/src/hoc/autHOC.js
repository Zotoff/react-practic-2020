import React, {Component} from 'react';
import {auth} from '../store/actions/user_actions';
import {connect} from 'react-redux';

export default function(ComposedClass, reload){
    class AutnehticationCheck extends Component{
        state={
            loading: true
        }

        componentDidMount(){
            this.props.dispatch(auth()).then(response => {
                let user = this.props.user.auth;
                this.setState({loading: false});
                if(!user) {
                    if(reload){
                        this.props.history.push('/login');
                    }
                } else {
                    if(reload === false){
                        this.props.history.push('/admin');
                    }
                    
                }
            })
        }


        render(){
            if(this.state.loading){
                //if loading checking the validation
                return <div className="loader">Loading...</div>
            } else {
                return <ComposedClass {...this.props} user={this.props.user} />
            }
        }
    }

    function mapStateToProps(state){
        return {
            user: state.user
        }
    }

    return connect(mapStateToProps)(AutnehticationCheck);
}