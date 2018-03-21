import { combineReducers } from "redux";
import { testReducer, TestState } from "./testReducer";

export interface ReduxState {
    testState: TestState;
}

export const rootReducer = combineReducers({
    testState: testReducer,
});