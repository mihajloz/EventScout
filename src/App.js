import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import NumberOfEvents from "./components/NumberOfEvents";
import { useEffect, useState } from "react";
import { extractLocations, getEvents } from "./api";
import { InfoAlert, ErrorAlert, WarningAlert } from "./components/Alert";
import CityEventsChart from "./components/CityEventsChart";
import EventsGenresChart from "./components/EventsGenresChart";

import "./App.css";

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (navigator.onLine) {
        setWarningAlert("");
        try {
          const allEvents = await getEvents();
          const filteredEvents =
            currentCity === "See all cities"
              ? allEvents
              : allEvents.filter((event) => event.location === currentCity);
          setEvents(filteredEvents.slice(0, currentNOE));
          setAllLocations(extractLocations(allEvents));
        } catch (error) {
          setErrorAlert("Error fetching events. Please try again later.");
        }
      } else {
        setWarningAlert(
          "You are currently offline. Data may not be up-to-date."
        );
      }
    };

    fetchData();
  }, [currentCity, currentNOE]);
  return (
    <div className="App">
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
      </div>
      <div className="overlay">
        <CitySearch
          setInfoAlert={setInfoAlert}
          allLocations={allLocations}
          setCurrentCity={setCurrentCity}
        />
        <NumberOfEvents
          setCurrentNOE={setCurrentNOE}
          setErrorAlert={setErrorAlert}
        />
      </div>
      {/* <div className="charts-container"> */}
      <CityEventsChart allLocations={allLocations} events={events} />
      <EventsGenresChart events={events} />
      {/* </div> */}
      <EventList events={events} />
    </div>
  );
};

export default App;
