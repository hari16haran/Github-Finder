import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'

const UserItem  = ({user:{login,avatar_url,html_url,node_id}}) =>  {    
        return (
            <div className="card text-center">
                    <img 
                        src={avatar_url}
                        alt=" "
                        className="round-img"
                        style={{width:'60px',height:'60px'}}
                    />
                    <h3>{login}</h3>
                    <div>
                        <Link to={`/user/${login}`} href={html_url} className="btn btn-dark btn-sm">More</Link>
                    </div>
            </div> 
        )
    }

UserItem.prototype = {
    user : PropTypes.object.isRequired
}

export default UserItem
