import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

test("increment button", () => {
    render(<Counter />);

    // getting the value of counter
    const counterValue = screen.getByTestId("counter");

    // imitate the clicking of the increment button
    // getByText - gets the element containing the + sign
    const incrementButton = screen.getByText("+");
    // event to click the button
    userEvent.click(incrementButton);

    // actual test
    // Typecasting the retrieved value to integer from the element
    const counter = parseInt(counterValue.innerHTML);
    // assert if number is 1
    expect(counter).toBeGreaterThan(0);
});

test("decrement button", () => {
    render(<Counter />);

    // getting the value of counter
    const counterValue = screen.getByTestId("counter");

    // imitate the clicking of the increment button
    // getting the element by data-testid
    const decrementButton = screen.getByTestId("decrement");
    // event to click the button
    userEvent.click(decrementButton);

    // actual test
    // Typecasting the retrieved value to integer from the element
    const counter = parseInt(counterValue.innerHTML);
    // assert if number is -1
    expect(counter).toBeLessThan(0);
});