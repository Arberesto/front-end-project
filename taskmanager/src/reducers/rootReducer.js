import {combineReducers} from 'redux';

import getTaskListReducer from './getTaskListReducer';
import userReducer from './userReducer';

export default (state = {}, action) => {
    return combineReducers({
        getTaskListReducer,
        userReducer
    })(state, action);
}