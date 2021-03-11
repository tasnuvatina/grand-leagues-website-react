import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router";
import LeagueInfoCard from "../LeagueInfoCard/LeagueInfoCard";
import "./LeagueDetails.css";
import { ExternalLink } from "react-external-link";

const LeagueDetails = () => {
  let { leagueId } = useParams();
  let [leagueDetail, setLeagueDetail] = useState({});
  useEffect(() => {
    let url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLeagueDetail(data.leagues[0]));
  }, []);
  let {
    strBanner,
    strFanart1,
    strDescriptionEN,
    strDescriptionES,
    strFacebook,
    strTwitter,
    strWebsite,
    strYoutube,
    strLogo,
  } = leagueDetail;

  let newLink = "" + strFacebook;

  return (
    <div className="league-details">
      <img src={strBanner} alt="" className="banner-style" />
      <LeagueInfoCard leagueDetail={leagueDetail}></LeagueInfoCard>
      <div className="league-logo-div">
        <img src={strLogo} alt="" className="league-logo" />
      </div>
      <div className="league-description">
        <p>
          <strong>English :</strong>
          {strDescriptionEN}
        </p>
        {strDescriptionES !== null ? (
          <p>
            <strong>español :</strong> {strDescriptionES}
          </p>
        ) : (
          <p></p>
        )}
      </div>
      <div className="icon-div">
        <div className="social-icon">
          <ExternalLink href={"https://" + strFacebook}>
            <span>
              <FontAwesomeIcon className="facebook" icon={faFacebookF} />
            </span>
          </ExternalLink>
        </div>
        <div className="social-icon">
          <ExternalLink href={"https://" + strTwitter}>
            <span>
              <FontAwesomeIcon className="twitter" icon={faTwitter} />
            </span>
          </ExternalLink>
        </div>
        <div className="social-icon">
          <ExternalLink href={"https://" + strYoutube}>
            <span>
              <FontAwesomeIcon className="youtube" icon={faYoutube} />
            </span>
          </ExternalLink>
        </div>
        <div className="social-icon">
          <ExternalLink href={"https://" + strWebsite}>
            <span>
              <FontAwesomeIcon className="website" icon={faGlobe} />
            </span>
          </ExternalLink>
        </div>
      </div>
    </div>
  );
};

export default LeagueDetails;
