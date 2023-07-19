import React, { useState } from "react";
import eventIcon from "../img/eventIcon.svg";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <li className="event">
      <div className="event-date">
        <img src={eventIcon} alt="eventIcon" className="eventIcon" />
        <div className="event-start-time">
          <div className="date">
            {new Date(event.start.dateTime).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div className="time">
            {new Date(event.start.dateTime).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
              timeZone: "Europe/Berlin",
            })}
          </div>
        </div>
      </div>

      <div className="event-info">
        <div className="event-main-info">
          <h3 className="event-title">{event.summary}</h3>
          <p className="event-location">{event.location}</p>
        </div>
        {showDetails && (
          <p className="event-description" data-testid="event-description">
            {event.description}
          </p>
        )}

        <button
          className="show-details-button"
          onClick={toggleDetails}
          data-testid="show-details-button"
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>
    </li>
  );
};

export default Event;
