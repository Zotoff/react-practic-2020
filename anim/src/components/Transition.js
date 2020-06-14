import React, { Component } from 'react';
import {Transition} from 'react-transition-group';
import '../css/App.css';

class TransitionComp extends Component{
    state = {
        show: true
    }

    showDiv = () => {
        this.setState({
            show: !this.state.show
        })
    }
    render(){
        return(
            <>
            <Transition
                in={this.state.show}
                timeout={2000}
                unmountOnExit
                onEntered={(node)=>{console.log('Enter')}}
            >
                {state => <div style={{
                    background: 'red',
                    height: '100px',
                    transition: 'all 2s ease',
                    opacity: state === 'exited' || state === 'exiting' ? 0 : 1
                }}>
                    {state}
                    </div>}
            </Transition> 
            <div className="showDiv" onClick={this.showDiv}>ShowDiv</div>
            </>

        )
    }
}


export default TransitionComp;