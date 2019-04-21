import {combineReducers} from "redux";

import users from "./home/reducers";

const appReducer = combineReducers({
    users
});

export default appReducer;