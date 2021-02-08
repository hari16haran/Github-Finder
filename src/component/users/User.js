import React, { useEffect, Fragment } from 'react';
import Spinner from '../layout/spinner';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import Repo from '../repos/Repos';

const User = ({user,match,getUser,getUserRepos,loading,repos}) => {
    
        useEffect(()=>{
            getUser(match.params.login)
            getUserRepos(match.params.login)
            //eslint-disable-next-line
        },[])

        const {login,name,avatar_url,location,bio,company,blog,public_repos,html_url,followers,following,hireable} = user;

        if(loading) return <Spinner />

        return (
            <Fragment>
                <Link to='/' className="btn btn-light">Back to Search</Link>
                Hireable : { }
                {hireable ? (<i className="fa fa-check text-success"/> ):( <i  className="fa fa-times-circle text-danger"/>)}
                <div className="card grid-2">
                    <div className="text-center">
                        <img src={avatar_url} alt={avatar_url} className="round-img" style={{width:'198px'}}/>
                        <h2>{name}</h2>
                        <p>location: {location}</p>
                    </div>
                    <div>
                        {bio && (
                            <Fragment>
                                <h3>Bio</h3>
                                {bio}
                                
                            </Fragment>
                        )}
                        <a href={html_url} className="btn btn-dark my-1">
                            Visit Github Profile
                        </a>
                        <ul>
                            <li>
                                {login &&(
                                    <Fragment>
                                        <strong>Username : </strong> {login}
                                    </Fragment>
                                )}
                            </li>
                            <li>
                                {company &&(
                                    <Fragment>
                                        <strong>Company : </strong> {company}
                                    </Fragment>
                                )}
                            </li>
                            <li>
                                {blog &&(
                                    <Fragment>
                                        <strong>Website : </strong> {blog}
                                    </Fragment>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">Followes: {followers}</div>
                    <div className="badge badge-danger">Following: {following}</div>
                    <div className="badge badge-success">Public Repo: {public_repos}</div>
                </div>
                <Repo repos={repos} />
            </Fragment>
        )
    }

    User.propTypes = {
        loading :PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,
        getUserRepos: PropTypes.func.isRequired,
        repos: PropTypes.array.isRequired
    }

export default User
