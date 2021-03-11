import React, { useEffect, useState } from 'react';
import "./LeagueBadge.css"

const LeagueBadge = (props) => {
    let {idLeague}=props;
    let [leagueDetail,setLeagueDetail] =useState({});
    useEffect(()=>{
        let url=`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(responce=>responce.json())
        .then(data=>setLeagueDetail(data.leagues[0]))
    },[])
    let {strBadge}=leagueDetail;
    console.log(strBadge)
    
    return (
        <div className="badge-style">
            <img style={{width:"50%"}} src={strBadge} alt=""/>
        </div>
    );
};

export default LeagueBadge;