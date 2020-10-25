import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'
import Player from '../containers/Player'
import NoutFound from '../containers/NotFound';
import Layout from '../components/Layout'

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/player/:id" component={Player} />
                <Route component={NoutFound} />
            </Switch>
        </Layout>

    </BrowserRouter>
);

export default App;