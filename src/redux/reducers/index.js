import { combineReducers } from "redux";
import { bankReducer } from "./bankReducers";

const reducers=combineReducers({
    bank:bankReducer
})

export default reducers;
