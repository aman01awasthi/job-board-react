import { createContext, useState } from "react";

export const JobsContext = createContext();

export default function JobsProvider({children}) {
    const[jobs, setJobs] = useState([]);

    return(
        <JobsContext.Provider value={{jobs, setJobs}}>
            {children}
        </JobsContext.Provider>
    )
}