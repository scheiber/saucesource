import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders the home page splash heading", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByText(/add some/i)).toBeInTheDocument();
});
