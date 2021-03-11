import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router";
import LeagueBadge from "../LeagueBadge/LeagueBadge";
import "./LeagueCards.css";

const LeagueCards = (props) => {
  let { idLeague, strLeague, strSport } = props.league;
  const history = useHistory();
  const showLeagueDetail = (idLeague) => {
    let url = `/league/${idLeague}`;
    history.push(url);
  };
  return (
    <div>
      <Card className="card-div" style={{ borderRadius: "10px" }}>
        <LeagueBadge idLeague={idLeague}></LeagueBadge>
        <Card.Body>
          <Card.Title>{strLeague},{idLeague}</Card.Title>
          <Card.Text>Sport type :{strSport}</Card.Text>
          <button
            onClick={() => showLeagueDetail(idLeague)}
            className="button-style"
          >
            <span>Explore  </span>
            <FontAwesomeIcon icon={faLongArrowAltRight} className="button-icon"/></button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LeagueCards;
