import React from "react";
import "./jobBox.css"
import peopleIcon from "../../assets/icons/people.png"
import flagIcon from "../../assets/icons/indianFlag.png"
import useJobContext from "../../hooks/useJobContext";
import { useNavigate } from "react-router-dom";

const JobBox = ( {job} ) => {
    const { loggedIn,  setJobId } = useJobContext();
    const navigate = useNavigate();

    const getJobDetails = () => {
        navigate(`/editJob/${job._id}`);
    };

    const handleViewDetails = (e) => {
        setJobId(job._id);
        navigate(`/${job._id}`);
    };

    return (
        <div className="jobBox_container">
            <div className="job_left_component">
                <div className="company_logo">
                    <img src={job.addLogoURL} alt="groupIcon" />
                </div>
                <div className="second_div">
                    <span>{job.jobPosition}</span>
                    <div className="second_div_text">
                        <img src={peopleIcon} alt="group" />
                        <span>11-50 </span>
                        <span>{job.monthlySalary}</span>
                    </div>
                    <div className="second_div_footer">
                        <span>{job.remoteOnsite}</span>
                        <span>{job.jobType}</span>
                    </div>
                </div>
                <div className="third_div">
                    <img src={flagIcon} alt="country" />
                    <span>{job.jobLocation}</span>
                </div>
            </div>
            <div className="job_right_component">
                <div className="job_right_upper">
                    {job.skillsRequired.map((skill, index) => {
                        return (
                            <span className="requiredSkills" key={index}>
                                {skill}
                            </span>
                        );
                    })}
                </div>

                <div className="job_right_lower">
                    {loggedIn ? <button onClick={getJobDetails}>Edit Job</button> : null}
                    <button onClick={handleViewDetails}>View Details</button>                </div>
            </div>
        </div>
    )
}

export default JobBox; 
