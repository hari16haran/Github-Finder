import React, { useState, Fragment } from 'react';

import Navbar from './component/layout/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Alert from './component/layout/Alert';
import SearchHistory from './component/layout/HistoryList';
import Users from './component/users/Users';
import User from './component/users/User';
import Search from './component/users/Search';
import About from './component/Pages/About';
import NotFound from './component/Pages/NotFound';
import './App.css';
import GithubState from './component/Context/github/githubState';
import { useEffect } from 'react/cjs/react.development';

const App = () => {

  const [alert, setAlert] = useState(null);

  const showAlert = (msg,type) =>{
    setAlert({ msg, type});
    setTimeout(() => {
      setAlert(null)
    }, 4000);
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
                <Search setAlert={showAlert}/>
                <Users />
              </Fragment>
              )} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User}/>
              <Route  component={NotFound}/>
           </Switch>
        </div>
      </div>
      </Router>
      </GithubState>
    );
  }

export default App;


