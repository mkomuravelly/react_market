import { takeLatest} from "redux-saga/effects";

import {actions} from "../constants/constants";
import * as workers from "./workers";

export const watchuser = function* () {
    yield takeLatest(actions.GET_USER, workers.getUserWorker);
}