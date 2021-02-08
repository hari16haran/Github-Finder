import React, { useState, Fragment } from 'react';

import Navbar from './component/layout/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Alert from './component/layout/Alert';
import SearchHistory from './component/layout/HistoryList';
import Users from './component/users/Users';
import User from './component/users/User';
import Search from './component/users/Search';
import About from './component/Pages/About';
import axios from 'axios';
import './App.css';
import GithubState from './component/Context/github/githubState';

const App = () => {
  // constructor(){
  //   super();
  //   this.state = {
  //     users:[],
  //     user:{},
  //     loading:false,
  //     alert :null,
  //     searchHistory:[],
  //     repos:[]
  //   }
  // }
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);


  // const filterUsers = async (user) => {
  //   setLoading(true);
  //   setAlert(null);

  //   const res = await axios.get(`https://api.github.com/search/users?q=${user}`);
  //   const history = [...searchHistory];
  //   history.push(user);
    
  //   setUsers(res.data.items);
  //   setSearchHistory(history);
  //   setLoading(false)
  // }
  const getUSer = async (username) => {
      setLoading(true);
      const res = await axios.get(`https://api.github.com/users/${username}`);
      setUser(res.data);
      setLoading(false);
    }

  const getUSerRepos = async (username) => {
     setLoading(true);

      const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);
      setRepos(res.data);
      setLoading(false);
    }

  const clearUsers = () =>  {
   
    setUsers([]);
    setSearchHistory([]);
      setLoading(false);

  }
  const showAlert = (msg,type) =>{
    setAlert({ msg, type});
  }
  
    return (
      <GithubState>
      <Router>
      <div className="App">
        <Navbar />
        
        <div className="container">
            <Alert alert={alert}/>
            <Switch>
              <Route exact path="/" render={props=> (
                <Fragment>
                <Search
                       //SearchUser={filterUsers} 
                        showClear= {users.length > 0 ? true : false} 
                        clearUsers={clearUsers}
                        setAlert={showAlert}/>
                        {/* {searchHistory && searchHistory.length > 0 && (
                          <SearchHistory HistoryList={searchHistory} />
                        )} */}
                <Users  loading={loading} users={users}  />
              </Fragment>
              )} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props=>(
                  <User {...props} getUser={getUSer} getUserRepos={getUSerRepos} repos={repos} user={user} loading={loading}/>
              )}/>
           </Switch>
        </div>
      </div>
      </Router>
      </GithubState>
    );
  }

export default App;


