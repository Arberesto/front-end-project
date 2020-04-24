import {combineReducers} from 'redux';

import getTaskListReducer from './getTaskListReducer';

export default (state = {}, action) => {
    return combineReducers({
        getTaskListReducer
    })(state, action);
}