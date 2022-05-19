import NewPoll from "../components/NewPoll";
import { render, fireEvent } from "@testing-library/react";


describe('NewPoll', () => {
  it('checks the input values ', () => {
  
      let component = render(<NewPoll />);
      let firstOption = component.getByTestId('foption');
      let secondNameOption = component.getByTestId('soption');
      let submitButton = component.getByText('Submit');

      fireEvent.click(submitButton)
      expect(firstOption).toBeInTheDocument();
      expect(secondOption).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
      
  });

});