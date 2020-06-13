import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from "../components/header";
import Home from "../components/Home";
import Artist from "../components/Artist";

const Routes = () => {
    return(
        <BrowserRouter>
            <Header />

            <Switch>
                <Route path="/artist/:artistId" component={Artist}/>
                <Route path="/" component={Home} exact/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;