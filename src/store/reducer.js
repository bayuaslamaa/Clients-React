import { SET_CLIENTS } from './actions'

const data = {
    clients: []
}

export default (state = data, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_CLIENTS:
            return { ...state, clients: payload }
        default:
            return state
    }
}