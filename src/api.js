import axios from 'axios';
const host = 'http://localhost:9090/api';

export const withErrorHandling = (func) => {
    return function (...args) {
        return func(...args).catch(({response}) => {
            const errorInfo = {
                code: response.status,
                message: response.data.message
            };
            throw errorInfo
        });
    }
}

export const fetchEvents = () => {
    return axios.get(`${host}/events`)
    .then(({data}) => data.events)
}

export const getMapData = (id) => {
    return axios.get(`${host}/events/${id}/map`)
    .then(({data}) => data.event_stalls)
}

export const saveMapData = (id, mapData) => {
    return axios.patch(`${host}/events/${id}/map`, mapData)
    .then((data) => data)
}
