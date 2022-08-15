import axios from 'axios'
import qs from 'qs'

let instance = axios.create({
    paramsSerializer: function (params) {
        return qs.stringify(params, { indices: false })
    },
    timeout: 10000,
})

// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

function parseError(messages) {
    // error
    if (messages) {
        if (messages instanceof Array) {
            return Promise.reject({ messages: messages })
        } else {
            return Promise.reject({ messages: [messages] })
        }
    } else {
        return Promise.reject({ messages: ['An error occurred'] })
    }
}

function parseBody(response) {
    if (response.status === 200) {
        return response.data
    } else {
        return this.parseError(response.data.message)
    }
}

instance.interceptors.request.use(function (config) {
    const apiToken = localStorage.getItem('token')
    const uid = localStorage.getItem('uid')
    const auth = apiToken + "@@" + uid
    config.headers = { 'Authorization': auth }
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    return parseBody(response)
}, function (error) {
    console.warn('Error status', error.response)
    // return Promise.reject(error)
    if (error.response) {
        return parseError(error.response.data)
    } else {
        return Promise.reject(error)
    }
});

export const httpRequest = instance