import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import UsersPage from './pages/UsersPage';

export default function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Switch>
                    <Route exact path="/">
                        <UsersPage />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </div>
        </BrowserRouter>
    )
}