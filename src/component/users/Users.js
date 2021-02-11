import React,{useContext} from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/spinner';
import PropTypes from 'prop-types'
import GithubContext from '../Context/github/githubContext';
import './user.css';

const Users = () => {

        const githubContext = useContext(GithubContext);
        const {loading,users} = githubContext;

        if(loading) {
            return <Spinner />
        } else {
            return (
                <div className="gridLayout">
                    {users.map(user=>{
                      return <UserItem key={user.id} user={user}/>
                    })}
                </div>
            );
        }
        
    }

Users.prototype = {
    users:PropTypes.array.isRequired,
    loading : PropTypes.bool.isRequired
}
export default Users
