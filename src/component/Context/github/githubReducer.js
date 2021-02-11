import {
    SEARCH_USERS,
    SET_ALERT,
    SET_LOADING,
    GET_REPOS,
    REMOVE_ALERT,
    GET_USER,
    SEARCH_HISTORY,
    CLEAR_USERS
} from '../type';

export default (state, action) => {
    switch(action.type) {
        case SEARCH_USERS:
            // let arr = [];
            // let prev = [...action.payload]
            // arr.push(prev)
            return{
                ...state,
                users:action.payload,
                loading:false
            }
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                loading:false
            }
        case GET_USER:
            return {
                ...state,
                user:action.payload,
                loading:false
            }
        case GET_REPOS:
            return {
                ...state,
                repos:action.payload,
                loading:false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state

    }
}