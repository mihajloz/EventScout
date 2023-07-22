import { loadFeature, defineFeature } from "jest-cucumber";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn't specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    let appContainer;

    given("the user has not specified a number", () => {});

    when("the user has selected a city", () => {
      appContainer = render(<App />);
    });

    then("the deafult number of events shown will be 32", () => {
      const numberOfEventsInput =
        appContainer.getByLabelText("Number of Events:");
      expect(numberOfEventsInput).toHaveValue(32);
    });
  });

  test("User can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    let appContainer;

    given("the user has selected a city and 32 events are shown", () => {
      appContainer = render(<App />);
    });

    when("the user wants to change how many events they want to view", () => {
      const numberOfEventsInput =
        appContainer.getByLabelText("Number of Events:");
      fireEvent.change(numberOfEventsInput, { target: { value: "10" } });
    });

    then(
      "the user should be able to change how many events are displayed",
      () => {
        const numberOfEventsInput =
          appContainer.getByLabelText("Number of Events:");
        expect(numberOfEventsInput).toHaveValue(10);
      }
    );
  });
});
