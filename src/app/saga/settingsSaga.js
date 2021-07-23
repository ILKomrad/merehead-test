import { takeEvery, call, put } from "redux-saga/effects";

import ConnectionApi from '../../api/connectionApi';

function* watchSettings() {
    yield takeEvery("FETCH_SETTINGS", getSettings);
}

function* getSettings() {
    try {
        const settings = yield call(ConnectionApi.send, {
            method: "get",
            url: process.env.PUBLIC_URL + "/settings.json"
        });
        
        yield put({ type: "settings/get/fulfilled", payload: settings });
    } catch (err) {
        yield put({ type: "settings/get/rejected", payload: err });
    }
}

export default watchSettings;