import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Home from './components/Home';
import MainLayout from './hoc/mainLayout';
import Auth from './hoc/autHOC';
import Login from './components/Users/login';
import Admin from './components/Users/Admin/index';
import Logout from './components/Users/logout';
import addPosts from './components/Users/Admin/Posts/add';

const Routes = () => {
    return(
        <BrowserRouter>
            <MainLayout>
                <Switch>
                    <Route path="/admin/posts/create" component={Auth(addPosts, true)} />
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