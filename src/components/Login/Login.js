import React, { useState } from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BASEURL from "../../constants/baseurl";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const signupRedirect = () => {
        navigate("/register")
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const login = () => {
        setLoading(true);
        axios
            .post(`${BASEURL}/login`, {
                email,
                password,
            })
            .then((response) => {
                localStorage.setItem("name", response.data.name);
                localStorage.setItem("token", response.data.token);
                navigate("/");
            })
            .catch((error) => {
                toast.error("Incorrect Email or Password. Try again.", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                });
                console.error("Login failed", error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="login_page">
            <div className="login_page_left">
                <div className="login_title">
                    <h1>Already have an account?</h1>
                    <span>Your personal job finder is here</span>
                </div>
                <div className="login_form">
                    <input value={email} onChange={handleEmail} type="email" placeholder="Email" />
                    <input value={password} onChange={handlePassword} type="passowrd" placeholder="Password" />
                </div>
                <div className="login_footer">
                    <button className="signin_btn" onClick={login} disabled={loading}>{loading ? "Loading..." : "Sign In"}</button>
                    <div className="login_footer_text">
                        <span>Don't have an account? </span>
                        <u onClick={signupRedirect}> Sign Up</u>
                    </div>
                </div>
            </div>
            <div className="login_page_right">
                <h1>Your Personal Job Finder</h1>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login;