import {
    actions
} from "../constants/constants"

export const users = (state = {
    fetching: true,
    result: null,
    error: null
}, action) => {
    switch (action.type) {
        case actions.GET_USER:
            return state;
        case actions.GET_USER_SUCCESS:
            return ({
                ...state,
                result: action.response,
                error: null
            });
        case actions.GET_USER_ERROR:
            return ({
                ...state,
                result: null,
                error: action.error
            });
        default:
            return state;
    }
};