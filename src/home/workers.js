import {call, put} from "redux-saga/effects";
import { debug } from "util";

const xhr = () => {
   return fetch("https://jsonplaceholder.typicode.com/posts").then (abc => 
        abc.json()
    ).then(data => {return data})
}
export function* getUserWorker() {
    try {      
        const response = yield call(xhr);
       // debugger;
        //console.log(JSON.stringify(response));
        yield put({ type: 'GET_USER_SUCCESS', response });
    } catch {

    }
}