import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getMoviesList} from './actions';
import {bindActionCreators} from "redux";

import Functional from './functional';
import Hooks from './functionalhooks';

class App extends Component {
    componentDidMount(){
        //this.props.getMoviesList(); // Dispatching the function from an action and grabbing the data. Enable for Class-based-components
    }
    render(){
        console.log(this.props);
        return (
            <div className="App">
                {/*<Functional />*/}
                <Hooks />
            </div>
            // {
            //     this.props.movies ?
            //     this.props.movies.map((item)=>(
            //         <div key={item.id}>
            //             {item.name}
            //         </div>
            //     ))
            //     : null
            // }

        )
    }
}

// Getting the access tp whatever is stored inside the redux store. Listening the reducers. Injecting the props inside the components.
function mapStateToProps(state){
    // console.log(state);
    return { // return is necessary
        movies: state.movies
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getMoviesList}, dispatch); // binding all the actions as first argument
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
