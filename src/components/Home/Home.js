import React, { useEffect } from "react";
import "./Home.css"
import JobSearch from "./jobSearch";
import JobContainer from "./jobContainer"
import useJobContext from "../../hooks/useJobContext";
import axios from "axios";

const Home = () => {
    const { loggedIn, setLoggedIn, setJobListings } = useJobContext();

    useEffect(() => {
        localStorage.getItem("token") ? setLoggedIn(true) : setLoggedIn(false);
        console.log(loggedIn);
    }, [loggedIn, setLoggedIn]);

    const getJobListings = () => {
        axios
            .get("http://localhost:4000/jobs")
            .then((response) => {
                setJobListings(response.data.jobListings);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    };

    useEffect(() => {
        getJobListings();
    }, []);

    return (
        <div className="home">
            <JobSearch />
            <JobContainer />
        </div>
    )
}

export default Home;