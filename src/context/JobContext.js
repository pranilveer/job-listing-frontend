import { createContext, useState } from "react";

const JobContext = createContext({
  loggedIn: false,
  setLoggedIn: () => { },
  showDetails: false,
  setShowDetails: () => { },
});

const Provider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [jobListings, setJobListings] = useState([]);
  const [jobId, setJobId] = useState("");

  const valueToShare = {
    loggedIn,
    setLoggedIn,
    showDetails,
    setShowDetails,
    jobListings,
    setJobListings,
    jobId,
    setJobId,
  };

  return (
    <JobContext.Provider value={valueToShare}>{children}</JobContext.Provider>
  );
};

export { Provider };

export default JobContext;