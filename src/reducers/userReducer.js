import * as types from '../actions/user/actionTypes'

const initialState = {
    authorized: localStorage.getItem('token') != null,
    username: '',
    registered: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.AUTHENTICATE_SUCCESS: {
            return {
                ...state,
                authorized: true,
                username: '',
                error: null
            }
        }
        case types.AUTHENTICATE_FAIL: {
            return {
                ...state,
                authorized: false,
                username: '',
                error: action.error
            }
        }
        case types.WHOAMI_SUCCESS: {
            return {
                ...state,
                username: action.username,
                error: null
            }
        }
        case types.WHOAMI_FAIL: {
            return {
                ...state,
                username: '',
                error: action.error
            }
        }
        case types.LOGOUT_SUCCESS: {
            return {
                ...state,
                authorized: false,
                error: null
            }
        }
        case types.LOGOUT_FAIL: {
            return {
                ...state,
                error: action.error
            }
        }
        case types.CREATE_USER_SUCCESS: {
            return {
                ...state,
                username: '',
                registered: true,
                error: null
            }
        }
        case types.CREATE_USER_FAIL: {
            return {
                ...state,
                username: '',
                registered: false,
                error: action.error
            }
        }

        default: {
            return state;
        }

    }
}