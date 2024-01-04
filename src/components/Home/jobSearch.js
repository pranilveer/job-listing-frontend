import React, { useCallback, useState } from "react";
import "./jobSearch.css"
import searchIcon from "../../assets/icons/searchIcon.png"
import useJobContext from "../../hooks/useJobContext";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import debounce from "lodash.debounce";
import skills from "../../constants/skillOptions";
import BASEURL from "../../constants/baseurl";


const JobSearch = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedSkills, setSelectedSkills] = useState([]);
    const { loggedIn, setJobListings } = useJobContext();
    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        getJobListings(searchTerm, selectedSkills);
    };

    const handleSelectChange = (e) => {
        const skill = e.target.value;
        if (skill && !selectedSkills.includes(skill)) {
            const updatedSkills = [...selectedSkills, skill];
            setSelectedSkills(updatedSkills);
            getJobListings(searchTerm, updatedSkills);
        }
    };

    const handleRemoveSkill = (skill) => {
        const updatedSkills = selectedSkills.filter((s) => s !== skill);
        setSelectedSkills(updatedSkills);
        getJobListings(searchTerm, updatedSkills);
    };

    const clearSkills = () => {
        setSelectedSkills([]);
        getJobListings(searchTerm, []);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("Search Term:", searchTerm);
        console.log("Selected Skills:", selectedSkills);
    }

    const addJobButton = () => {
        navigate("/addJob");
    };

    const getJobListings = useCallback(debounce((_searchTerm, _selectedSkills) => {
        axios
            .get(`${BASEURL}/jobs`, {
                params: {
                    searchTerm: _searchTerm,
                    skills: _selectedSkills.join(","),
                }
            })
            .then((response) => {
                setJobListings(response.data.jobListings);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, 200), []);

    return (
        <div className="job_search">
            <form className="search_form" onSubmit={{ handleSearchSubmit }}>
                <div className="search_bar">
                    <img src={searchIcon} alt="Search Icon" />
                    <input type="text" placeholder="Type any job title" value={searchTerm} onChange={handleSearchChange} />
                </div>
            </form>
            <div className="job_search_footer">
                <div className="select_skills">
                    <select value={selectedSkills} onChange={handleSelectChange}>
                        <option value="">Select Skill</option>
                        {skills.map((skill, index) => {
                            return <option key={index}>{skill}</option>;
                        })}
                    </select>
                </div>
                <div className="selected_skills">
                    {selectedSkills.map((skill) => (
                        <div className="selected_skill" key={skill}>
                            {skill}
                            <button className="remove_skill" onClick={() => handleRemoveSkill(skill)} >X</button>
                        </div>
                    ))}
                </div>
                {selectedSkills.length > 0 && (
                    <button
                        className="clear__skills"
                        onClick={clearSkills}
                    >
                        Clear
                    </button>
                )}

                {loggedIn && (
                    <button className="add_job_btn" onClick={addJobButton}>
                        + Add Job
                    </button>
                )}
            </div>
        </div>
    )
}

export default JobSearch;