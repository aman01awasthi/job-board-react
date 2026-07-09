import { useJobs } from '../context/JobsContext';
import JobList from '../components/JobList';

const Home = () => {
  const { jobs } = useJobs();

  return (
    <div className="home-page">
      <h1>Job Listings</h1>
      <JobList jobs={jobs} />
    </div>
  );
};

export default Home;