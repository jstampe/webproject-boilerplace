import { isType, Action } from "typescript-fsa";
import { doTestSuccess } from "../actions/testActions";

export interface TestState {
    test: string;
}
const initState: TestState = {
    test: ""
};
export const testReducer = (state: TestState = initState, action: Action<{}>) => {
    if (isType(action, doTestSuccess)) {
        return {
            ...state,
            test: "foo " + action.payload,
        };
    }
    return state;
};
