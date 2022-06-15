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
    // let Login = component.getByTestId("Text");
    let Text = component.getByTestId("Text");
    let Image = component.getByTestId("Image");

    fireEvent.click(Image);
    expect(Image).toBeInTheDocument();
    expect(Text).toBeInTheDocument();
    expect(Image).toBeInTheDocument();
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
