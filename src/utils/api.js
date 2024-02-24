const BASE_URL = 'http://localhost:3000';

export const api = {
    get (url) {
        return fetch(BASE_URL + url, {
            headers: { 
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());
    },
    post (url, params) {
        return fetch(BASE_URL + url, {
            method: 'post',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })
            .then(res => res.json());
    }
}