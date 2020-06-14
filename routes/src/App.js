import React from 'react';
import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom';
import './App.css';

import Posts from './Posts';
import Blog from './Blog';
import PostItem from './PostItem';
import Home from './Home';
import Admin from './Admin';
import NotFound from './404';
import Conditional from './Conditional';
import PureComponent from './PureComp';
import Profile from './Profile';

const App = () => {
  return(
    <BrowserRouter>
      <header>
        <div className="container">
          <div className="col d-flex align-items-center justify-content-between">
            <div className="Logo">MyApp</div>
          </div>
          <div className="col">
            <div className="buttons d-flex align-items-center justify-content-center">
              <NavLink className="text-info" to="/" activeStyle={{color: 'yellow'}}>Home</NavLink>
              <NavLink className="text-info" to="/blog" activeStyle={{color: 'yellow'}}>Blog</NavLink>
              <NavLink className="text-info" to="/posts" activeStyle={{color: 'yellow'}}>Posts</NavLink>
              <NavLink className="text-info" to="/admin" activeStyle={{color: 'yellow'}}>Admin</NavLink>
              <NavLink className="text-info" to="/conditional" activeStyle={{color: 'yellow'}}>Conditional</NavLink>
              <NavLink className="text-info" to="/purecomponent" activeStyle={{color: 'yellow'}}>Pure</NavLink>
              <NavLink className="text-info" to="/profile" activeStyle={{color: 'yellow'}}>Profile</NavLink>
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
        <Route path="/profile" component={Profile}/>
        <Route path="/conditional" exact component={Conditional}/>
        <Route path="/purecomponent" component={PureComponent}/>
        <Route path="/" exact component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
