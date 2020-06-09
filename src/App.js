import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import './components/Header/Header.css';
import NewsList from './components/NewsList/NewsList';
import JSON from './db.json';


class App extends Component {
  state = {
    news: JSON
  }
  render(){
    return(
      <div className="container">
        <Header />
        <NewsList news={this.state.news}/>
      </div>
    )
  }
}

export default App;
