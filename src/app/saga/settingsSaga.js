import { takeEvery, call, put } from "redux-saga/effects";

import ConnectionApi from '../../api/connectionApi';

function* watchSettings() {
    yield takeEvery("FETCH_SETTINGS", getSettings);
}

function* getSettings() {
    try {
        const settings = yield call(ConnectionApi.get, "./settings.json");
        yield put({ type: "settings/get/fulfilled", payload: settings });
    } catch (err) {
        yield put({ type: "settings/get/rejected", payload: err });
    }
}

export default watchSettings;