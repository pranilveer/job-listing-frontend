import React from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import userPageImage from "../../assets/images/userPageImage.png"

const Login = () => {
    const navigate = useNavigate();
    const signupRedirect = () => {
        navigate("/register")
    }

    return (
        <div className="login_page">
            <div className="login_page_left">
                <div className="login_title">
                    <h1>Already have an account?</h1>
                    <span>Your personal job finder is here</span>
                </div>
                <div className="login_form">
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                </div>
                <div className="login_footer">
                    <button className="signin_btn">Sign In</button>
                    <div className="login_footer_text">
                        <span>Don't have an account? </span>
                        <u onClick={signupRedirect}> Sign Up</u>
                    </div>
                </div>
            </div>
            <div className="login_page_right">
                <h1>Your Personal Job Finder</h1>
            </div>
        </div>
    )
}

export default Login;