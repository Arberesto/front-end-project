const CONTENT_TYPE_VALUE = 'application/json';

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    throw new Error(response.statusText);
}

export function getTaskList(url, status) {
    return fetch(url + status, {
        method: 'GET',
        headers: new Headers({
            'Accept': CONTENT_TYPE_VALUE,
            'Content-Type': CONTENT_TYPE_VALUE,
            'Authorization': `Bearer ${JWT}`
        }),

    })
        .then((response) => checkStatus(response))
        .then((response) =>
            response.json()
        )
        .catch((error) => {
            return error;
        });
}

export function createTask(url, body) {
    return fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Accept': CONTENT_TYPE_VALUE,
            'Content-Type': CONTENT_TYPE_VALUE
        }),
        body: JSON.stringify(body)
    })
        .then((response) => checkStatus(response))
        .then((response) => response.json())
        .catch((error) => {
            return error;
        });
}

export function deleteTask(url, task) {
    return fetch(url + task, {
        method: 'DELETE',
        headers: new Headers({
            'Accept': CONTENT_TYPE_VALUE,
            'Content-Type': CONTENT_TYPE_VALUE
        }),
    })
        .then((response) => checkStatus(response))
        .then((response) => response.json())
        .catch((error) => {
            return error;
        });
}

export function updateTask(url, body) {
    return fetch(url, {
        method: 'PATCH',
        headers: new Headers({
            'Accept': CONTENT_TYPE_VALUE,
            'Content-Type': CONTENT_TYPE_VALUE
        }),
        body: JSON.stringify(body)
    })
        .then((response) => checkStatus(response))
        .catch((error) => {
            return error;
        });
}

