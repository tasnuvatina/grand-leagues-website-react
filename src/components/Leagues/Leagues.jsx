import React, { useEffect, useState } from 'react';
import LeagueCards from '../LeagueCards/LeagueCards';
import "./Leagues.css"

const Leagues = () => {
    let [leagues,setLeagues]=useState([]);
    useEffect(()=>{
        let url="https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
        fetch(url)
        .then(responce=>responce.json())
        .then(data=>setLeagues(data.leagues))
    },[])
    let newLeagues=leagues.slice(0,15);
    return (
        <div className="all-leagues">
            {
                newLeagues.map(eachLeague=><LeagueCards key={eachLeague.idLeague} league={eachLeague}></LeagueCards>)
            }
        </div>
    );
};

export default Leagues;