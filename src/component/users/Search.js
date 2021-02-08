import React, { useState,useContext} from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../Context/github/githubContext';

const Search = ({setAlert,showClear,clearUsers}) =>  {
    const githubContext = useContext(GithubContext)
    const [text,setText] = useState('');

    const onSubmit = (e)=>{
        e.preventDefault();
        if(text === '') {
           setAlert('Please Enter Username', 'light')
        } else {
            githubContext.SearchUser(text);
            setText('')
        }
    } 

    const setValue = e => {
        setText(e.target.value)
    }
    
        return (
            <div>
                <form onSubmit={onSubmit.bind(this)} className="form">
                    <input type="text" value={text} placeholder="Finder User ..."
                    onChange={setValue}
                    />
                    <input type="submit" value="Search" className="btn btn-primary"/>
                    {showClear && (
                         <button type="button" onClick={clearUsers} className="btn btn-black">
                         Clear
                    </button>
                    )}
                </form>
               
            </div>
            
        )
    }

Search.propType = {
    //SearchUser : PropTypes.func.isRequired,
    clearUsers : PropTypes.func.isRequired,
    showClear : PropTypes.bool.isRequired,
    setAlert : PropTypes.func.isRequired
}

export default Search
