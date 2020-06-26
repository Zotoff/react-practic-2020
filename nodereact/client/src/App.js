import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {

  componentDidMount() {
    axios.get('http://localhost:3001/api/users')
        .then((response)=>{
          console.log(response.data)
        })
  }

  render(){
    return (
        <div className="App">
          <h1>Hello</h1>
        </div>
    );
  }

}

export default App;
