import BadRequest from "../components/BadRequest";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";

describe("BadRequest", () => {
  it("checks the input values ", () => {
    let component = render(
      <MemoryRouter>
        <BadRequest />
      </MemoryRouter>
    );
    let Login = component.getByTestId("Login");
    let Text = component.getByText(
      "There is nothing to show here or the page is loading"
    );

    fireEvent.click(Login);
    expect(Login).toBeInTheDocument();
    expect(Text).toBeInTheDocument();
    expect(Login).toBeInTheDocument();
  });
});

describe("BadRequest Snapshot", () => {
  it("matches the snapshot ", () => {
    let component = render(
      <MemoryRouter>
        <BadRequest />
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
