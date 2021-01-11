import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import NotFound from './pages/NotFound';
import login from './pages/login';

class myroute extends Component {
    render() {
        return (
            <div>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={login} />
                <Route exact path="/page1" component={Page1} />
                <Route exact path="/page2" component={Page2} />
                <Route exact path="/page3/:username" component={Page3} />
                <Route  component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default myroute;