import React,{useReducer} from 'react';
import axios from 'axios';
import GithubContext from '../github/githubContext';
import GithubReducer from '../github/githubReducer';
import {
    SEARCH_USERS,
    SET_ALERT,
    SET_LOADING,
    GET_REPOS,
    REMOVE_ALERT,
    GET_USER,
    SEARCH_HISTORY
} from '../type';

const GithubState = (props) => {

    const initialState = {
        users: [],
        user:{},
        repos:[],
        searchHistory:[],
        loading:false
    } 

    const [state, dispatch] = useReducer(GithubReducer, initialState);


    //Search User

    const filterUsers = async (user) => {
        //setLoading();
    
        const res = await axios.get(`https://api.github.com/search/users?q=${user}`);
        // const history = [...searchHistory];
        // history.push(user);
        
        dispatch({
            type:SEARCH_USERS,
            payload: res.data.items
        });
      }

    //GET Repos



    //GET user 


    //clear users


    //loading

    //const setLoading = dispatch({type: SET_LOADING});


    return <GithubContext.Provider 
        value={{
            users:state.users,
            user:state.user,
            repos:state.repos,
            searchHistory: state.searchHistory,
            loading:state.loading,
            filterUsers
        }}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState