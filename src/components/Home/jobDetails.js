import React, { useEffect, useState } from "react";
import "./jobDetails.css";
import duration from "../../assets/icons/duration.png";
import stipend from "../../assets/icons/stipend.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import useJobContext from "../../hooks/useJobContext";
import BASEURL from "../../constants/baseurl";

const JobDetails = () => {
    const { id } = useParams();
    const [jobDetails, setJobDetails] = useState({});
    const navigate = useNavigate();
    const { loggedIn } = useJobContext();

    useEffect(() => {
        axios
            .get(`${BASEURL}/jobs/` + id)
            .then((response) => {
                setJobDetails(response.data.jobListing);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                navigate("/404");
            })
    }, [id]);

    const getJobDetails = () => {
        navigate(`/editjob/${id}`);
    };

    return (
        <div className="job__details__container">
            <div className="job__details__upper">
                <span>
                    {`${jobDetails.jobPosition} ${jobDetails.remoteOnsite === "remote" ? "remote" : "In office"
                        } ${jobDetails.jobType} Job/internship at ${jobDetails.companyName}`}
                </span>
            </div>
            <div className="job__details__lower">
                <div className="job__details__first__section">
                    <span>{moment(new Date(jobDetails.createdAt)).fromNow()}</span>
                    <span>.</span>
                    <span>{jobDetails.jobType}</span>
                </div>
                <div className="job__details__second__section">
                    <span>{jobDetails.companyName}</span>
                    {loggedIn && <button onClick={getJobDetails}>Edit Job</button>}                </div>
                <div className="job__details__third__section">
                    <span>{jobDetails.jobLocation}</span>
                    <span>|</span>
                    <span>India</span>
                </div>
                <div className="job__details__fourth__section">
                    <div className="job__details__fourth__section__left">
                        <div className="job__details__fourth__section__left__first">
                            <img src={stipend} alt="" />
                            <span>Stipend</span>
                        </div>
                        <div className="job__details__fourth__section__left__second">
                            <span> Rs {jobDetails.monthlySalary}/month</span>
                        </div>
                    </div>
                    <div className="job__details__fourth__section__right">
                        <div className="job__details__fourth__section__right__first">
                            <img src={duration} alt="" />
                            <span>Duration</span>
                        </div>
                        <div className="job__details__fourth__section__right__second">
                            <span>6 months</span>
                        </div>
                    </div>
                </div>
                <div className="job__details__fifth__section">
                    <h1>About Company</h1>
                    <p>{jobDetails.aboutCompany}</p>
                </div>
                <div className="job__details__sixth__section">
                    <h1>About the job/internship</h1>
                    <p>{jobDetails.jobDescription}</p>
                </div>
                <div className="job__details__seventh__section">
                    <h1>Skill(s) Required</h1>
                    {jobDetails.skillsRequired?.map((skill) => {
                        console.log(skill);
                        return <span>{skill}</span>
                    })}
                </div>
                <div className="job__details__eighth__section">
                    <h1>Additional Information</h1>
                    <p>Number of openings 2</p>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;