import React from 'react'
import "./jobContainer.css"
import JobBox from './jobBox'
import useJobContext from "../../hooks/useJobContext";

const JobContainer = () => {
  const { jobListings } = useJobContext();

  return (
    <div>
      {jobListings.length < 1 ? (
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <div>
          {jobListings.map((job) => {
            return <JobBox key={job._id} job={job} />;
          })}
        </div>
      )}
    </div>
  )
}

export default JobContainer;