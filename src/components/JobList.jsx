import JobCard from './JobCard';

const JobList = ({ jobs }) => {
  if (!jobs || jobs.length === 0) {
    return <p className="no-jobs">No jobs found.</p>;
  }

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;