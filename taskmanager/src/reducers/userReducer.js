import * as types from '../actions/user/actionTypes'

const initialState = {
    authorized: !!localStorage.getItem('token'),
    username: '',
    registered: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.AUTHORIZE_SUCCESS: {
            return {
                ...state,
                authorized: true,
                username: '',
                error: null
            }
        }
        case types.AUTHORIZE_FAIL: {
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
        case types.AUTHENTICATE_FAIL: {
            return {
                ...state,
                authorized: false,
                username: '',
                error: null
            }
        }
        default: {
            return state;
        }

    }
}