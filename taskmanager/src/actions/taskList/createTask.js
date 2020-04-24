import * as fetcher from '../../fetcher/fetcher';
import * as types from './actionTypes';

export default function createTask(task) {
    return (dispatch) => {
        return fetcher.createTask('mockapi/getTaskList.json', task)
            .then(response => {
                dispatch({
                    type: types.CREATE_TASK_SUCCESS,
                    tasksList: response.tasks
                });
            })
            .catch(error => {
                dispatch({
                    type: types.CREATE_TASK_ERROR,
                    error: error
                });
            })
    }
}