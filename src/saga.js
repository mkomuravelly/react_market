import {all, fork} from "redux-saga/effects";

import * as user from "./home/watchers";

function* appRootSaga() {
    yield all([
        fork(user.watchuser)
    ]);
}

export default appRootSaga;