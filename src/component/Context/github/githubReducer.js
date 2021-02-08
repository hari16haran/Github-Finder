import { act } from 'react-dom/cjs/react-dom-test-utils.development';
import {
    SEARCH_USERS,
    SET_ALERT,
    SET_LOADING,
    GET_REPOS,
    REMOVE_ALERT,
    GET_USER,
    SEARCH_HISTORY
} from '../type';

export default (state, action) => {
    switch(action.type) {
        // case SEARCH_USERS:
        //     // let arr = [];
        //     // let prev = [...action.payload]
        //     // arr.push(prev)
        //     return{
        //         ...state,
        //         users:action.payload,
        //         //searchHistory:arr,
        //         loading:false
        //     }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state

    }
}