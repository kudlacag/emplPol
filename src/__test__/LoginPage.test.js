import LoginPage from "../components/LoginPage";
import { render, fireEvent } from "@testing-library/react";


describe('LoginPage', () => {
  it('checks if element is in Document ', () => {
  
      let component = render(<LoginPage />);
      let label1 = component.getAllByText(/User/);
      let label2 = component.getAllByText(/Password/);
      expect(label1.length).toEqual(1);
      expect(label2.length).toEqual(1);

      let firstNameInput = component.getByTestId('user-input');
      let lastNameInput = component.getByTestId('password-input');
      let submitButton = component.getByText('Submit');

      expect(firstNameInput).toBeInTheDocument();
      expect(lastNameInput).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
      
  });

});