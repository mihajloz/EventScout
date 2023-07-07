import {
  render,
  fireEvent,
  queryByTestId,
  waitFor,
} from "@testing-library/react";
import Event from "../components/Event";
import { getEvents } from "../api";

describe("Event", () => {
  let allEvents;

  beforeAll(async () => {
    allEvents = await getEvents();
  });

  it("renders event title", () => {
    const event = allEvents[0];
    const { queryByText } = render(<Event event={event} />);
    const titleElement = queryByText(event.summary);
    expect(titleElement).toBeInTheDocument();
  });

  it("renders event start time", () => {
    const event = allEvents[0];
    const { queryByText } = render(<Event event={event} />);
    const startTimeElement = queryByText(event.start.dateTime);
    expect(startTimeElement).toBeInTheDocument();
  });

  it("renders event location", () => {
    const event = allEvents[0];
    const { queryByText } = render(<Event event={event} />);
    const locationElement = queryByText(event.location);
    expect(locationElement).toBeInTheDocument();
  });

  it("renders show details button", () => {
    const event = allEvents[0];
    const { container } = render(<Event event={event} />);
    const showDetailsButton = container.querySelector(".show-details-button");
    expect(showDetailsButton).toBeInTheDocument();
  });

  test("by default, event's details section should be hidden", () => {
    const event = allEvents[0];
    const { queryByText, queryByTestId } = render(<Event event={event} />);
    const detailsSection = queryByText(event.description);
    const showDetailsButton = queryByTestId("show-details-button");
    expect(detailsSection).toBeNull();
    expect(showDetailsButton.textContent).toBe("Show Details");
  });

  test("shows the details section when the user clicks on show details", async () => {
    const event = allEvents[0];
    const { getByTestId, queryByTestId } = render(<Event event={event} />);
    const showDetailsButton = getByTestId("show-details-button");

    fireEvent.click(showDetailsButton);

    await waitFor(() => {
      const detailsSection = queryByTestId("event-description");
      expect(detailsSection).toBeInTheDocument();
    });
  });

  test("hides the details section when the user clicks on hide details", () => {
    const event = allEvents[0];
    const { getByTestId, queryByText } = render(<Event event={event} />);
    const showDetailsButton = getByTestId("show-details-button");
    fireEvent.click(showDetailsButton); // Expand the details section

    const hideDetailsButton = getByTestId("show-details-button"); // Use the same button element
    fireEvent.click(hideDetailsButton);

    const detailsSection = queryByText(event.description);
    expect(detailsSection).not.toBeInTheDocument();
  });
});
