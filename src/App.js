import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import UsersPage from './pages/UsersPage';

export default function App() {
    const dispatch = useDispatch();
    const serverUrl = useSelector(state => state.settings.serverUrl);
    let inner = <div>loading...</div>;

    useEffect(() => {
        dispatch({type: "FETCH_SETTINGS"});
    }, [dispatch]);

    if (serverUrl) {
        inner = (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <UsersPage />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        )
    }
    return inner;
}