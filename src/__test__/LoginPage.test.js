import LoginPage from "../components/LoginPage";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "../reducers";
import middleware from "../middleware";

const store = createStore(reducers, middleware);

describe("LoginPage", () => {
  it("checks the static Text if they are there ", () => {
    let component = render(
      <MemoryRouter>
        <Provider store={store}>
          <LoginPage />
        </Provider>
      </MemoryRouter>
    );
    let label1 = component.getAllByText(/User/);
    let label2 = component.getAllByText(/Password/);
    expect(label1.length).toEqual(1);
    expect(label2.length).toEqual(1);

    let firstNameInput = component.getByTestId("user-input");
    let lastNameInput = component.getByTestId("password-input");
    let submitButton = component.getByText("Submit");

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("shows error if user is not intered", () => {
    let component = render(
      <MemoryRouter>
        <Provider store={store}>
          <LoginPage />
        </Provider>
      </MemoryRouter>
    );
    var userInput = component.getByTestId("user-input");
    fireEvent.change(userInput, { target: { value: "" } });
    var passwordInput = component.getByTestId("password-input");
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    var submitButton = component.getByText("Submit");
    fireEvent.click(submitButton);
    expect(component.queryByTestId("error-header")).not.toBeInTheDocument();
  });
});
