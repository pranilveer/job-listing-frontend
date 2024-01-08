import React from "react";
import "./Header.css"
import { useNavigate } from "react-router-dom";
import useJobContext from "../../hooks/useJobContext";

const Header = () => {
    const navigate = useNavigate();
    const { loggedIn, setLoggedIn } = useJobContext();

    const loginPage = () => {
        navigate("/login");
    }
    const signupPage = () => {
        navigate("/register");
    }
    const logout = () => {
        setLoggedIn(false);
        localStorage.clear();
        navigate("/");
    };

    return (
        <div className="header">
            <div className="header_title">jobFinder</div>
            {loggedIn ? (
                <div className="user_icon">
                    <button onClick={logout}> Logout </button>
                    <span>Hello Recruiter!</span>
                    <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt="" />
                </div>
            ) : (
                <div className="header_buttons">
                    <button className="header_login" onClick={loginPage}> Login </button>
                    <button className="header_register" onClick={signupPage}> Register </button>
                </div>
            )}
        </div>
    )
}

export default Header;