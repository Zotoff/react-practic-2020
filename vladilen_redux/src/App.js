import React, {Component} from 'react'
import './App.scss'
import Counter from './Counter'
import {connect} from 'react-redux'; // для соединения локального компонента с глобальным state
import {add, sub, addNumber, asyncAdd} from './redux/actions/actions';
import { ADD_NUMBER } from './redux/actions/actionTypes';

class App extends Component {

  render() {
    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
        </div>
        <div className="Actions">
          <button onClick={() => this.props.onAddNumber(15)}>Добавить 15</button>
          <button onClick={this.props.onSub}>Вычесть 15</button>
        </div>
        <div className="Actions">
          <button onClick={() => this.props.onAsyncAdd(100)}>Асинхронно добавить 100</button>
        </div>
        <Counter />
      </div>
    )
  }
}

function mapStateToProps(state) {
  // аргумент - общий state из редюсера
  return {
    counter: state.counter1.counter // забираем из редюсера, counter превращается в props
  }
}

function mapDispatchToProps(dispatch) { // диспетчер для передачи action
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onAsyncAdd: number => dispatch(asyncAdd(number)),
    onAddNumber: number => dispatch(addNumber(number)) //для передачи параметров
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
