import React,{Fragment} from 'react'
import Spinner from '../layout/spinner.gif';

const spinner = ()=> {
    return (
        <Fragment>
            <img src={Spinner} alt="Loading..." style={{width:'200px',margin:'auto',display:'block'}}/>
        </Fragment>
    )
}

export default spinner
