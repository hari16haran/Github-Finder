import React, {Fragment} from 'react';
import User from '../users/User';
import Search from './component/users/Search';
import Users from './component/users/Users';

const Home = () => {
    return (
        <Fragment>
            <Search setAlert={showAlert}/>
            <User />
        </Fragment>
    )
}
export default Home
