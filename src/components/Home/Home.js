import React, { useState } from "react";
import Header from "./Header";
import JobSearch from "./jobSearch";
import JobContainer from "./jobContainer"
import JobDetails from "./jobDetails"

const Home = () =>{
    const [showDetails, setShowDetails] = useState(true);
    return (
        <div className="home">
            <Header />
            {showDetails? ( <JobDetails /> ) : 
            (<>
            <JobSearch />
            <JobContainer />
            </>)}
        </div>
    )
}

export default Home;