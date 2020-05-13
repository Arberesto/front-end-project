import * as types from '../actions/taskList/actionTypes';

const initialState = {
    tasksList: [],
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TASK_LIST_SUCCESS: {
            return {
                ...state,
                tasksList: action.tasksList,
                error: null
            }
        }
        case types.GET_TASK_LIST_ERROR: {
            return {
                ...state,
                tasksList: [],
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
}