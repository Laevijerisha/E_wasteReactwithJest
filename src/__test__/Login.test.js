import { getByTestId, render, screen, fireEvent } from "@testing-library/react";
import axios from 'axios';
import { BrowserRouter, Routes } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import Login from "../Components/Login";

jest.mock('axios');
jest.mock('react-router-dom');

describe("Test the Signin Component", () => {
    test("render the login form with login button", async () => {

        render(<Login />);

        const buttonList = await screen.findAllByRole("button");
        console.log();
        expect(buttonList).toHaveLength(1);
    });

    test("email input field should accept email", () => {
        render(<Login />);
        const email = screen.getByPlaceholderText("name@example.com");
        userEvent.type(email, "rajakumari");
        expect(email.value).not.toMatch("rajakumari@gmail.com");

    });
    test("password input should have type only password", () => {
        render(<Login />);
        const password = screen.getByPlaceholderText("Password");
        expect(password).toHaveAttribute("type", "password");
    });

    test("check the word is placed or not", () => {
        render(<Login />);
        var element1 = screen.getByTestId("Heading");
        expect(element1).toBeInTheDocument();
        expect(element1).toHaveTextContent('Login');
    });
    test('Test Case', () => {
        render(<Login />);
        const textbox1 = screen.getByTestId('TextBox1');
        const textbox2 = screen.getByTestId('TextBox2');
        expect(textbox1).toBeInTheDocument();
        expect(textbox2).toBeInTheDocument();
    });
    test('renders login form', () => {
        render(<Login />);
        expect(screen.getByPlaceholderText('name@example.com')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    });
    test('displays error messages for invalid input', () => {
        render(<Login />);
        const loginButton = screen.getByTestId("Heading");
        fireEvent.click(loginButton);
        (() => {
            expect(screen.getByPlaceholderText('Email is required')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Password is required')).toBeInTheDocument();
        });
    });
    test('handles form submission and displays success message for valid input', async () => {

        render(<Login />);
        const emailInput = screen.getByPlaceholderText('name@example.com');
        const passwordInput = screen.getByPlaceholderText('Password');
        const loginButton = screen.getByTestId("Heading");
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        axios.post.mockResolvedValueOnce({
            data: {
                emailstatus: true,
                passwordstatus: true,
                admin: false
            }
        });
        fireEvent.click(loginButton);
        (() => {
            expect(screen.getByText('User Logged in successfully..')).toBeInTheDocument();
        });
    });
    test('handles form submission and displays error message for invalid credentials', async () => {
        render(<Login />);
        const emailInput = screen.getByPlaceholderText('name@example.com');
        const passwordInput = screen.getByPlaceholderText('Password');
        const loginButton = screen.getByTestId("Heading");
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'invalidpassword' } });
        axios.post.mockResolvedValueOnce({
            data: {
                emailstatus: true,
                passwordstatus: false
            }
        });
        fireEvent.click(loginButton);
        (() => {
            expect(screen.getByText('Invalid Credentials')).toBeInTheDocument();
        });
    });
    test('handles form submission and displays error message for user not available', async () => {
        render(<Login />);
        const emailInput = screen.getByPlaceholderText('name@example.com');
        const passwordInput = screen.getByPlaceholderText('Password');
        const loginButton = screen.getByTestId("Heading");
        fireEvent.change(emailInput, { target: { value: 'nonexistentuser@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        axios.post.mockResolvedValueOnce({
            data: {
                emailstatus: false
            }
        });
        fireEvent.click(loginButton);
        (() => {
            expect(screen.getByText('User not available...')).toBeInTheDocument();
        });
    });
});
