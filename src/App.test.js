import { render, screen } from '@testing-library/react';
import App from './App';

// test(description, function)
test('renders learn react link', () => {
  // render - programatically renders the component as a DOM treee
  render(<App />);
  // screen - replica of the screen that we see
  // getByText - finds the element that contains the text
  // /learn react/i - text to be matched regardless of capitalization
  const linkElement = screen.getByText(/Slack Project/i);
  // Actual test
  // expect - built in function
  // linkElement - element to be tested
  // toBeInTheDocument - test/assert
  expect(linkElement).toBeInTheDocument();
});