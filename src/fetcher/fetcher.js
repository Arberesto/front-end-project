const CONTENT_TYPE_VALUE = 'application/json';
export const  JWT = 'token';
    function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    throw new Error(response.statusText);
}

export function get_authenticated(url, status) {
    return fetch(url + status, {
        method: 'GET',
        headers: new Headers({
            'Accept': CONTENT_TYPE_VALUE,
            'Content-Type': CONTENT_TYPE_VALUE,
            'Authorization': `Bearer ${localStorage.getItem(JWT)}`
        }),

    })
        .then((response) => checkStatus(response))
        .then((response) =>
            response.json()
        )
        .catch((error) => {
            //return error
            throw new Error(error.prototype.message);
        });
}

export function post_authenticated(url, body) {
    return fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Accept': CONTENT_TYPE_VALUE,
            'Content-Type': CONTENT_TYPE_VALUE,
            'Authorization': `Bearer ${localStorage.getItem(JWT)}`
        }),
        body: JSON.stringify(body)
    })
        .then((response) => checkStatus(response))
        .then((response) => response.json())
        .catch((error) => {
            throw new Error(error.prototype.message);
        });
}

export function delete_authenticated(url, task) {
    return fetch(url + task, {
        method: 'DELETE',
        headers: new Headers({
            'Accept': CONTENT_TYPE_VALUE,
            'Content-Type': CONTENT_TYPE_VALUE,
            'Authorization': `Bearer ${localStorage.getItem(JWT)}`
        }),
    })
        .then((response) => checkStatus(response))
        .then((response) => response.json())
        .catch((error) => {
            throw new Error(error.prototype.message);
        });
}

export function patch_authenticated(url, body) {
    return fetch(url, {
        method: 'PATCH',
        headers: new Headers({
            'Accept': CONTENT_TYPE_VALUE,
            'Content-Type': CONTENT_TYPE_VALUE,
            'Authorization': `Bearer ${localStorage.getItem(JWT)}`
        }),
        body: JSON.stringify(body)
    })
        .then((response) => checkStatus(response))
        .catch((error) => {
            throw new Error(error.prototype.message);
        });
}

export function postSignIn(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Accept': CONTENT_TYPE_VALUE,
            'Content-Type': CONTENT_TYPE_VALUE
        }),
        body: JSON.stringify(data)
    })
        .then((response) => checkStatus(response))
        .then((response) => response.json())
        .catch((error) => {
            throw new Error(error.prototype.message);
        });
}

export function postSignUp(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Accept': CONTENT_TYPE_VALUE,
            'Content-Type': CONTENT_TYPE_VALUE
        }),
        body: JSON.stringify(data)
    })
        .then((response) => checkStatus(response))
        .catch((error) => {
            throw new Error(error.prototype.message);
        });
}

