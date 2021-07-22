import { takeEvery, call, put, select } from "redux-saga/effects";

import ConnectionApi from '../../api/connectionApi';

export default function* watchUsers() {
    yield takeEvery("FETCH_ALL_USERS", fetchAllUsers);
}

function* fetchAllUsers() {
    const state = yield select();
 
    try {
        const posts = yield call(ConnectionApi.get, `${state.settings.serverUrl}api/users`);
        yield put({ type: "users/fetchUsers/fulfilled", payload: posts });
    } catch (err) {
        yield put({ type: 'users/fetchUsers/rejected', payload: err })
    }
}