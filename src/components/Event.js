import React, { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <li>
      <h3 className="event-title">{event.summary}</h3>
      <p className="event-start-time">{event.start.dateTime}</p>
      <p className="event-location">{event.location}</p>

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
    </li>
  );
};

export default Event;
