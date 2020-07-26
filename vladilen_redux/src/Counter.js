import React from 'react'
import {connect} from 'react-redux'

class Counter extends React.Component {
    render(){
        return (
            <div className="counter" style={{padding: 20, border: '1px solid red', borderRadius: '15px'}}>
                <h1>Counter 2 {this.props.counter2}</h1>
                <hr />
                <button onClick={()=>this.props.onChange(1)}>Add</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter2: state.counter2.counter2
    }
}

function mapDispatchToProps(dispatch) { // диспетчер для передачи action
    return {
      onChange: number => dispatch({type: 'ADD2', payload: number})
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Counter);