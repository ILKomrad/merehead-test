import { all } from "redux-saga/effects";

function* watchUsers() {
    yield console.log("watchUsers")
}

export default function* rootSaga() {
    yield all([
        watchUsers()
    ]);
}