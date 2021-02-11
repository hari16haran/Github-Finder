import React from 'react';
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

export default HistoryList;
