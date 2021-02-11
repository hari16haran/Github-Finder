import React,{useReducer} from 'react';
import axios from 'axios';
import GithubContext from '../github/githubContext';
import GithubReducer from '../github/githubReducer';
import {
    SEARCH_USERS,
    //SET_ALERT,
    SET_LOADING,
    GET_REPOS,
    //REMOVE_ALERT,
    GET_USER,
    //SEARCH_HISTORY,
    CLEAR_USERS
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
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${user}`);
        dispatch({
            type:SEARCH_USERS,
            payload: res.data.items
        });
      }

    //GET Repos
  
    const getUserRepos = async (username) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);
        dispatch({
            type: GET_REPOS,
            payload:res.data
        })
      }

    //GET user 

    const getUser = async (username) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}`);
        dispatch({
            type: GET_USER,
            payload:res.data
        })
    }

    //clear users

    const clearUsers = () => dispatch({type: CLEAR_USERS});

    //loading

    const setLoading = () => dispatch({type: SET_LOADING});


    return <GithubContext.Provider 
        value={{
            users:state.users,
            user:state.user,
            repos:state.repos,
            searchHistory: state.searchHistory,
            loading:state.loading,
            filterUsers,
            clearUsers,
            getUser,
            getUserRepos
        }}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState