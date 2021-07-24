import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import UsersPage from './pages/UsersPage';
import EditUserPage from './pages/EditUserPage';
import "./App.css";

export default function App() {
    const dispatch = useDispatch();
    const serverUrl = useSelector(state => state.settings.serverUrl);
    let inner = <div>loading...</div>;

    useEffect(() => {
        dispatch({type: "FETCH_SETTINGS"});
    }, [dispatch]);

    if (serverUrl) {
        dispatch({type: "FETCH_ALL_USERS"});
        
        inner = (
            <HashRouter>
                <Switch>
                    <Route exact path="/">
                        <UsersPage />
                    </Route>
                    <Route exact path="/editUser/:userId" component={EditUserPage} />
                    <Redirect to="/" />
                </Switch>
            </HashRouter>
        )
    }
    return inner;
}