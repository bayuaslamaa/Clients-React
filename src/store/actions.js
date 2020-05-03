import Axios from "axios"


export const SET_CLIENTS = 'SET_CLIENTS'

export const setClients = (data) => {
    return {
        type: SET_CLIENTS,
        payload: data
    }
}

function fetchClients() {
    return Axios.get('http://localhost:3000/clients')
}

export const getClients = () => {
    return dispatch => {
        fetchClients()
            .then(({ data }) => dispatch(setClients(data)))
            .catch(console.log)
    }
}
