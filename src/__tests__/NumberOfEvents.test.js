import { render, fireEvent } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";

let inputElement;

beforeEach(() => {
  const { container } = render(<NumberOfEvents />);
  inputElement = container.querySelector('input[type="number"]');
});

test("NumberOfEvents component contains an element with the role of textbox", () => {
  expect(inputElement).toBeInTheDocument();
});

test("Default value of NumberOfEvents component is 32", () => {
  expect(inputElement.value).toBe("32");
});

test("Value of NumberOfEvents component's textbox changes correctly when user types in it", () => {
  fireEvent.change(inputElement, { target: { value: "10" } });
  expect(inputElement.value).toBe("10");

  fireEvent.change(inputElement, { target: { value: "5" } });
  expect(inputElement.value).toBe("5");
});
