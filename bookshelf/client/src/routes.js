import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Home from './components/Home';
import MainLayout from './hoc/mainLayout';
import Auth from './hoc/autHOC';
import Login from './components/Users/login';
import Admin from './components/Users/Admin/index';
import Logout from './components/Users/logout';
import addPosts from './components/Users/Admin/Posts/add';
import EditPost from './components/Users/Admin/Posts/edit';
import AdminPosts from './components/Users/Admin/Posts/posts';
import Article from './components/Article';

const Routes = () => {
    return(
        <BrowserRouter>
            <MainLayout>
                <Switch>
                    <Route path="/admin/posts/edit/:id" component={Auth(EditPost, true)} />
                    <Route path="/admin/posts/create" component={Auth(addPosts, true)} />
                    <Route path="/admin/posts" component={Auth(AdminPosts, true)} />
                    <Route path="/article/:id" component={Auth(Article)} />
                    <Route path="/admin" component={Auth(Admin, true)} />
                    <Route path="/login" component={Auth(Login, false)} />
                    <Route path="/logout" component={Auth(Logout, true)} />
                    <Route path="/" component={Auth(Home)} />
                </Switch>
            </MainLayout>
        </BrowserRouter>
    )
}

export default Routes;