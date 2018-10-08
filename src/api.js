import axios from 'axios';
const host = 'http://18.130.80.91:443/api';

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
    return axios.get(`${host}/events/${id}/stalls`)
    .then(({data}) => data.stalls)
}

export const saveMapData = (id, mapData) => {
    mapData = Object.values(mapData).reduce((accum, stall) => {
        let newObj = {
            event_stalls_id: stall.event_stalls_id,
            stall_x: stall.stall_x,
            stall_y: stall.stall_y,
            stall_height: stall.stall_height,
            stall_width: stall.stall_width,
            stall_rotation: stall.stall_rotation,
            events_id: stall.events_id,
            stall_id: stall.stall_id
        } 
        accum[stall.stall_id] = newObj
        return accum
    }, {})
    return axios.patch(`${host}/events/${id}/map`, mapData)
    .then(({data}) => data)
}

