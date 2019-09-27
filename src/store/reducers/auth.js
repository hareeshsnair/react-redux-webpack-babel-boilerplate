import { authConstants } from "../constants";

const initialState = {
    loading: false,
    authenticated: false,
    error: false
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case authConstants.LOGIN_REQUEST: 
            return {
                ...state,
                loading: true
            };
        case authConstants.LOGIN_SUCCESS: 
            return {
                ...state,
                authenticated: true
            };
        case authConstants.LOGIN_FAILURE: 
            return {
                ...state,
                error: true
            };

        default: return state;
    }
}