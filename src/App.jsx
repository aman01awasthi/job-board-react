import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import JobDetails from "./pages/jobDetail";
import Favourites from "./pages/favourites";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import {useFetch} from './hooks/useFetch';
import { useJobs } from "./hooks/useJobs";
function App() {
  const {setJobs} = useJobs();
  const {data} = useFetch("https://remotive.com/api/remote-jobs?limit=10");

  useEffect(() =>{
    if(data && data.jobs){
      setJobs(data.jobs);
    }
  },[data, setJobs]);
  
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job-detail/:id" element={<JobDetails />}></Route>
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;