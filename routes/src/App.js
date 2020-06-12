import React from 'react';
import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom';
import './App.css';

import Posts from './Posts';
import Blog from './Blog';
import PostItem from './PostItem';
import Home from './Home';
import Admin from './Admin';
import NotFound from './404';

const App = () => {
  return(
    <BrowserRouter>
      <header>
        <div className="container">
          <div className="col d-flex align-items-center justify-content-between">
            <div className="Logo">MyApp</div>
            <div className="buttons">
              <NavLink className="btn btn-info" to="/" activeStyle={{color: 'yellow'}}>Home</NavLink>
              <NavLink className="btn btn-info" to="/blog" activeStyle={{color: 'yellow'}}>Blog</NavLink>
              <NavLink className="btn btn-info" to="/posts" activeStyle={{color: 'yellow'}}>Posts</NavLink>
              <NavLink className="btn btn-info" to="/admin" activeStyle={{color: 'yellow'}}>Admin</NavLink>
            </div>
          </div>
        </div>
      </header>
      <hr />
      <Switch>
        <Route path="/posts/:id" component={PostItem}/>
        <Route path="/admin" component={Admin} admin={true}/>
        <Route path="/posts" component={Posts}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/" exact component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
