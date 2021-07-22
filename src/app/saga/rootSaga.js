import { all } from "redux-saga/effects";

import watchSettings from './settingsSaga';
import watchUsers from './usersSaga';

export default function* rootSaga() {
    yield all([
        watchSettings(),
        watchUsers()
    ]);
}