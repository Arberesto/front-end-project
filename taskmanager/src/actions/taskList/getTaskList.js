import * as fetcher from '../../fetcher/fetcher';
import * as types from './actionTypes';

export default function getTaskList() {
    return (dispatch) => {
        return fetcher.getTaskList('mockapi/getTaskList.json')
            .then(response => {
                dispatch({
                    type: types.GET_TASK_LIST_SUCCESS,
                    tasksList: response.tasks
                });
            })
            .catch(error => {
                dispatch({
                    type: types.GET_TASK_LIST_ERROR,
                    error: error
                });
            })
    }
}