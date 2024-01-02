import React from "react";
import "./jobBox.css"
import peopleIcon from "../../assets/icons/people.png"
import flagIcon from "../../assets/icons/indianFlag.png"

const JobBox = () => {
    return (
        <div className="jobBox_contaier">
            <div className="job_left_component">
                <div className="company_logo">
                    <img src={peopleIcon} alt="groupIcon" />
                </div>
                <div className="second_div">
                    <span>Frontend Developer</span>
                    <div className="second_div_text">
                        <img src={people} alt="group" />
                        <span>11-50 </span>
                        <span>₹ 25000</span>
                    </div>
                    <div className="second_div_footer">
                        <span>Office</span>
                        <span>Full time</span>
                    </div>
                </div>
                <div className="third_div">
                    <img src={flagIcon} alt="country" />
                    <span>Delhi</span>
                </div>
            </div>
            <div className="job_right_component">
                <div className="job_right_upper">
                    <span>hello</span>
                </div>
                <div className="job_right_lower">
                    <button>View Details</button>
                </div>
            </div>
        </div>
    )
}

export default JobBox; 