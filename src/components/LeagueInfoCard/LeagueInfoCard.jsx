import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlag,
  faFutbol,
  faHourglassStart,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import maleImage from "../../images/male.png";
import femaleImage from "../../images/female.png";
import "./LeagueInfoCard.css";

const LeagueInfoCard = (props) => {
  let {
    strLeague,
    intFormedYear,
    strCountry,
    strSport,
    strGender,
  } = props.leagueDetail;
  return (
    <div className="league-primary-info">
      <div className="league-info">
        <h2>{strLeague}</h2>
        <div>
          <p>
            <FontAwesomeIcon icon={faHourglassStart} /> Founded :{" "}
            {intFormedYear}
          </p>
          <p>
            <FontAwesomeIcon icon={faFlag} /> Country : {strCountry}
          </p>
          <p>
            <FontAwesomeIcon icon={faFutbol} /> Sport Type : {strSport}
          </p>
          <p>
            <FontAwesomeIcon icon={faVenusMars} /> Gender : {strGender}
          </p>
        </div>
      </div>
      <div>
        <img
          src={strGender === "Male" ? maleImage : femaleImage}
          alt=""
          className="male-female-image"
        />
      </div>
    </div>
  );
};

export default LeagueInfoCard;
