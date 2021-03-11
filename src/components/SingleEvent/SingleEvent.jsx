import React from "react";
import { Button } from "react-bootstrap";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import "./SingleEvent.css"

const SingleEvent = (props) => {
  let {
    dateEvent,
    strCity,
    strCountry,
    strDescriptionEN,
    strEvent,
    strLeague,
    strSport,
    strVenue,
    strThumb,
    strVideo,
  } = props.event;
  return (
    <div className="event-card">
      <div className="event-image-div"> <img src={strThumb} alt="" className="event-image"/> </div>
      <div>
      <h3>{strEvent}</h3>
      <p>Date :{dateEvent}</p>
      <p>Place: {strVenue},{strCountry}.</p>
      <p>{strDescriptionEN}</p>
      <button className="button-style"><ExternalLink href={strVideo} className="vedio-link">
            <span>
            <FontAwesomeIcon icon={faVideo} /> Watch Vedio
            </span>
          </ExternalLink></button>
      </div>
    </div>
  );
};

export default SingleEvent;
