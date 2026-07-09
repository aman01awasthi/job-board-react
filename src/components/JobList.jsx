import JobCard from './JobCard';

const JobList = ({ jobs }) => {
  if (!jobs || jobs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-slate-500">No jobs found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;