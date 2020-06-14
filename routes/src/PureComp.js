import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
    state = {
        name: 'Francis'
    }
    render() {
        console.log('render');
        return (
            <div className="container">
                Pure Comp
                <hr />
                <h3>{this.state.name}</h3>
                <hr />
                <button
                    onClick={()=>{this.setState({name:'Paul'})}}
                >Change the name</button>
            </div>
        )
    }
}
