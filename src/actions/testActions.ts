import { actionCreatorFactory } from "typescript-fsa";

const actionCreator = actionCreatorFactory("TestActions");

export const doTest = actionCreator<number>("DO_TEST");
export const doTestSuccess = actionCreator<number>("DO_TEST_SUCCESS");