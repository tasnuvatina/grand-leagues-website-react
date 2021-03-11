import React, { useEffect, useState } from "react";
import SingleEvent from "../SingleEvent/SingleEvent";
import "./Events.css";

const Events = () => {
  let [events, setEvents] = useState([]);
  useEffect(() => {
    let url =
      "https://www.thesportsdb.com/api/v1/json/1/eventsseason.php?id=4328&s=2020-2021";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEvents(data.events));
  }, []);
  let newEvents = events.slice(0, 15);

  return (
    <div>
    <div className="event-header"><h2>RECENT EVENTS</h2></div>
      <div className="all-events">
        {newEvents.map((event) => (
          <SingleEvent key={event.idEvent} event={event}></SingleEvent>
        ))}
      </div>
    </div>
  );
};

export default Events;
