import {
    AUTHENTICATION_REQUEST,
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAILURE
} from '../actions/actionType'

const initState = {
    user: {},
    isLoading: false,
}

const authentication = (state = initState, action) => {
    switch (action.type) {
        case AUTHENTICATION_REQUEST:
            return {
                ...state,
                result: [...state.result, action.result]
            }
        default:
            return initState
    }
}