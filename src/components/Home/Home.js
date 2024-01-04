import React, { useEffect } from "react";
import "./Home.css"
import JobSearch from "./jobSearch";
import JobContainer from "./jobContainer"
import useJobContext from "../../hooks/useJobContext";
import axios from "axios";
import BASEURL from "../../constants/baseurl";

const Home = () => {
    const { loggedIn, setLoggedIn, setJobListings, setLoading } = useJobContext();

    useEffect(() => {
        localStorage.getItem("token") ? setLoggedIn(true) : setLoggedIn(false);
    }, [loggedIn, setLoggedIn]);

    const getJobListings = () => {
        setLoading(true);
        axios
            .get(`${BASEURL}/jobs`)
            .then((response) => {
                setJobListings(response.data.jobListings);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            })
            .finally(() => {
                setLoading(false);
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