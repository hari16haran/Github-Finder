import React from 'react'
import {Link} from 'react-router-dom';

const HistoryList = ({HistoryList}) => {
    return (
        <div className="history">
            {HistoryList.map(list=>{
                return(
                        <span key={list}>{list}</span>
                )
            })}
        </div>
    )
}

export default HistoryList
