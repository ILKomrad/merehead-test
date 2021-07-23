import { takeEvery, call, put, select } from "redux-saga/effects";

import ConnectionApi from '../../api/connectionApi';

export default function* watchUsers() {
    yield takeEvery("FETCH_ALL_USERS", fetchAllUsers);
    yield takeEvery("ADD_USER", addUser);
    yield takeEvery("EDIT_USER", editUser);
}

function* sendToApi({method, url, body, ...data}) {
    const state = yield select();

    try {
        const resp = yield call(ConnectionApi.send, {
            method,
            url: (state.settings.serverUrl + url),
            body
        });
        yield put({ type: data.fulfilled, payload: resp });
    } catch (err) {
        yield put({ type: data.rejected, payload: err })
    }
}

function* fetchAllUsers() {
    yield call(sendToApi, {
        method: "get",
        url: "api/users",
        fulfilled: "users/fetchUsers/fulfilled",
        rejected: "users/fetchUsers/rejected"
    });
}

function* addUser(a) {
    yield call(sendToApi, {
        method: "post",
        url: "api/users",
        body: a.payload,
        fulfilled: "users/addUser/fulfilled",
        rejected: "users/addUser/rejected"
    });
}

function* editUser(a) {
    yield call(sendToApi, {
        method: "put",
        url: `api/user/${a.payload.id}`,
        body: a.payload,
        fulfilled: "users/editUser/fulfilled",
        rejected: "users/editUser/rejected"
    });
}