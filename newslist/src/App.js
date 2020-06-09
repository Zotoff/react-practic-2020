import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './components/Header/Header.css';
import NewsList from './components/NewsList/NewsList';
import JSON from './db.json';


class App extends Component {
  state = {
    news: JSON,
    footerCopyright: '&copy; Paulzotoff',
    filtered: ''
  }
  getKeywords = (event) => {
    let keywords = event.target.value;
    let filtered = this.state.news.filter((item)=>{
      return item.title.indexOf(keywords) > -1;
    });
    this.setState({
			filtered: filtered //устанавливаем state = отфильтрованный массив
    });
  }
  render(){
    return(
      <div className="container">
        <Header keywords={this.getKeywords}/>
        <NewsList news={this.state.filtered.length === 0 ? this.state.news : this.state.filtered}/>
        <Footer footerCopyright={this.state.footerCopyright} />
      </div>
    )
  }
}

export default App;
