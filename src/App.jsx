import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import JobDetails from "./pages/jobDetail";
import Favourites from "./pages/favourites";
import Navbar from "./components/Navbar";
function App() {
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
