import {combineReducers} from 'redux';
import {i18nReducer} from 'react-redux-i18n';
import TaskListReducer from './TaskListReducer';
import userReducer from './userReducer';

export default (state = {}, action) => {
    return combineReducers({
        TaskListReducer,
        userReducer,
        i18n: i18nReducer
    })(state, action);
}