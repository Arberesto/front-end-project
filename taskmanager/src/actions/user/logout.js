import * as types from './actionTypes';

//TODO: add backend part (nullify token)

export default function logout() {
    return (dispatch) => {
        return (() => {
                localStorage.removeItem('token');
                dispatch({
                    type: types.LOGOUT_SUCCESS
                });
            })
            .catch(error => {
                dispatch({
                    type: types.LOGOUT_FAIL,
                    error: error
                })
            });
    }
}