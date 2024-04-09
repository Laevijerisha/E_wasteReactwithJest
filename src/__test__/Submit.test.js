import { getByTestId, render, screen } from "@testing-library/react";
import axios from 'axios';
import userEvent from "@testing-library/user-event";
import SubmitRequest from '../Components/UserComponents/SubmitRequest';4

jest.mock('axios');
jest.mock('react-router-dom');

describe("Test the Signin Component", () => {
    test("render the signup form with submit button", async () => {
 
        render(<SubmitRequest />);
 
        const buttonList = await screen.findAllByRole("button");
        console.log();
        expect(buttonList).toHaveLength(1);
    });
    test('Test Case 1: Inital verification of submit request', () => {
 
        render(<SubmitRequest />);
        
         
        const textbox1=screen.getByTestId('TextBox1'); 
        const textbox2=screen.getByTestId('TextBox2'); 
        const textbox3=screen.getByTestId('TextBox3'); 
        const textbox4=screen.getByTestId('TextBox4'); 
        const textbox5=screen.getByTestId('TextBox5'); 
        
   
     
       
     
          expect(textbox1).toHaveTextContent("");
          expect(textbox2).toHaveTextContent("");
          expect(textbox3).toHaveTextContent("");
          expect(textbox4).toHaveTextContent("");
          expect(textbox5).toHaveTextContent("");
     
        
     
         
         
      });
 
    

});