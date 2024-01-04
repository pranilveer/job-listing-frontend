import React from 'react'
import "./jobContainer.css"
import JobBox from './jobBox'
import useJobContext from "../../hooks/useJobContext";
import NoResultsFound from "./NoResultsFound";
import Loading from "../Loading/Loading";

const JobContainer = () => {
  const { jobListings, loading } = useJobContext();

  return (
    <div>
      {loading ? (
        <Loading />
      ) : jobListings.length > 0 ? (
        <div className="jobContainer">
          {jobListings.map((job) => (
            <JobBox key={job._id} job={job} />
          ))}
        </div>
      ) : (
        <NoResultsFound />
      )}
    </div>
  )
}

export default JobContainer;