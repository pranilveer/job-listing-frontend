import React from "react";
import "./Header.css"
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const loginPage = () => {
        navigate("/login");
    }
    const signupPage = () => {
        navigate("/register");
    }
    return (
        <div className="header">
            <div className="header_title">jobFinder</div>
            <div className="header_buttons">
                <div className="header_login" onClick={loginPage}>Login</div>
                <div className="header_register" onClick={signupPage}>Register</div>
            </div>
        </div>
    )
}

export default Header;