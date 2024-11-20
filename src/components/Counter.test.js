import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

test("increment button", () => {
    render(<Counter/>);

    const counterValue = screen.getByTestId("counter");

    const incrementButton = screen.getByText("+");

    userEvent.click(incrementButton);

    const counter = parseInt(counterValue.innerHTML);
    expect(counter).toBeGreaterThan(0);
});

test("decrement button", () => {
    render(<Counter/>);

    const decValue = screen.getByTestId("counter");

    const decrementButton = screen.getByText("-");

    userEvent.click(decrementButton);

    const dec = parseInt(decValue.innerHTML);
    expect(dec).toBeLessThan(0);
});