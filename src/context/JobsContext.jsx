import { createContext, useContext, useState } from "react";


export const JobsContext = createContext();

export const JobsProvider = ({children}) => {
    const[jobs, setJobs] = useState([]);

    return(
        <JobsContext.Provider value={{jobs, setJobs}}>
            {children}
        </JobsContext.Provider>
    )
}

export const useJobs = () => useContext(JobsContext);