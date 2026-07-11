import { createContext, useContext, useState } from "react";

export const JobsContext = createContext();

export default function JobsProvider({children}) {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    return(
        <JobsContext.Provider value={{jobs, setJobs, loading, setLoading, error, setError}}>
            {children}
        </JobsContext.Provider>
    )
}

export const useJobs = () => useContext(JobsContext);