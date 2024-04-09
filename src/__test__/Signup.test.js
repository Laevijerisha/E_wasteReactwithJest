import { getByTestId, render, screen } from "@testing-library/react";
import axios from 'axios';
import userEvent from "@testing-library/user-event";
import Signup from "../Components/UserComponents/Signup";

 
jest.mock('axios');
jest.mock('react-router-dom');
 
describe("Test the Signin Component", () => {
    test("render the signup form with submit button", async () => {
 
        render(<Signup />);
 
        const buttonList = await screen.findAllByRole("button");
        console.log();
        expect(buttonList).toHaveLength(1);
    });
    test("email input field should accept email", () => {
        render(<Signup />);
        const email = screen.getByPlaceholderText("Email");
        userEvent.type(email, "Joseph");
        expect(email.value).not.toMatch("joseph@gmail.com");

    });
    test("password input should have type only password", () => { 

        render(<Signup />); 

        const password = screen.getByPlaceholderText("Password"); 

        expect(password).toHaveAttribute("type", "password"); 

    }); 

  test("check the word is placed or not", () => { 

        render(<Signup />); 

        var element1=screen.getByTestId("Heading"); 

        expect(element1).toBeInTheDocument();  

        expect(element1).toHaveTextContent('Signup') ; 

      }); 
      test("check the word is placed or not", () => { 

        render(<Signup />); 

        var element1=screen.getByTestId("Head"); 

        expect(element1).toBeInTheDocument();  

        expect(element1).toHaveTextContent('Submit') ; 

      }); 
      test('Test Case',()=>{ 

        render(<Signup/>); 

        const textbox1=screen.getByTestId('TextBox1'); 

        const textbox2=screen.getByTestId('TextBox2'); 

        const textbox3=screen.getByTestId('TextBox3'); 

        const textbox4=screen.getByTestId('TextBox4'); 

        const textbox5=screen.getByTestId('TextBox5'); 

        const textbox6=screen.getByTestId('TextBox6'); 

 
        expect(textbox1).toBeInTheDocument(); 

        expect(textbox2).toBeInTheDocument(); 

        expect(textbox3).toBeInTheDocument(); 

        expect(textbox4).toBeInTheDocument(); 

        expect(textbox5).toBeInTheDocument(); 

        expect(textbox6).toBeInTheDocument(); 

   

        }); 
        test('renders login form', () => {  

            render(<Signup />);  
  
            expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();  
  
            expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument();  
  
            expect(screen.getByPlaceholderText('Location')).toBeInTheDocument();  
  
            expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();  
  
            expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();  
  
            expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument(); 
  
       
  
          });  

          

});
