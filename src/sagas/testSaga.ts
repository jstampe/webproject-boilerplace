import { Action } from "typescript-fsa";
import * as TestActions from "../actions/testActions";
import { put, takeEvery } from "redux-saga/effects";

function* doTheTest(action: Action<number>) {
    try {
        console.log("We are doing the test...", action.payload);
        const result = action.payload + 100;
        yield put(TestActions.doTestSuccess(result));
    } catch (e) {
        console.warn("Couldn't write language to localstorage");
    }
}

export function* testSaga() {
    yield takeEvery(TestActions.doTest, doTheTest);
}