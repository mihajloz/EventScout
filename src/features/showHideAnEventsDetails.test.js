import { loadFeature, defineFeature } from "jest-cucumber";
import { render, fireEvent } from "@testing-library/react";
import Event from "../components/Event";
import App from "../App";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  const mockEvent = {
    id: 1,
    summary: "Test Event",
    location: "Test Location",
    start: {
      dateTime: "2023-07-22T10:00:00Z",
    },
    description: "Test Description",
  };

  test("An event element is collapsed by default", ({ given, when, then }) => {
    let renderedEvent;

    given("that the user chooses a city", () => {});

    when("the user receives the list of events of that city", () => {
      renderedEvent = render(<Event event={mockEvent} />);
    });

    then("the event element should collapse by default", () => {
      const eventDescription = renderedEvent.queryByTestId("event-description");
      expect(eventDescription).toBeNull();
    });
  });

  test("User can expand an event to see its details", ({
    given,
    when,
    then,
  }) => {
    let renderedEvent;

    given("the user has chosen an event", () => {});

    when("the user clicks on the event", () => {
      renderedEvent = render(<Event event={mockEvent} />);
      fireEvent.click(renderedEvent.getByTestId("show-details-button"));
    });

    then("the event details will be shown", () => {
      const eventDescription = renderedEvent.queryByTestId("event-description");
      expect(eventDescription).toBeInTheDocument();
    });
  });

  test("User can collapse an event to hide its details", ({
    given,
    when,
    then,
  }) => {
    let renderedEvent;

    given("the user has opened an event up", () => {
      renderedEvent = render(
        <Event event={{ ...mockEvent, showDetails: true }} />
      );
    });

    when("the user clicks on the event to show the details", () => {
      fireEvent.click(renderedEvent.getByTestId("show-details-button"));
    });

    when("the user clicks on the event again to hide the details", () => {
      fireEvent.click(renderedEvent.getByTestId("show-details-button"));
    });

    then("the event will collapse and hide its details", () => {
      const eventDescription = renderedEvent.queryByTestId("event-description");
      expect(eventDescription).toBeNull();
    });
  });
});
