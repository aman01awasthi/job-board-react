import { useParams } from 'react-router-dom';
import { useJobs } from '../context/JobsContext';
import { useFavourite } from '../context/FavouritesContext';

const JobDetail = () => {
  const { id } = useParams();
  const { jobs } = useJobs();
  const { isFavourite, handleAddFavourite, handleRemoveFavourite } = useFavourite();

  const job = jobs.find(j => j.id === parseInt(id));

  if (!job) {
    return <p className="not-found">Job not found.</p>;
  }

  const favourited = isFavourite(job.id);

  const toggleFavourite = () => {
    if (favourited) {
      handleRemoveFavourite(job);
    } else {
      handleAddFavourite(job);
    }
  };

  return (
    <div className="job-detail">
      <div className="job-detail-header">
        <h1>{job.title}</h1>
        <button
          className={`favourite-btn ${favourited ? 'active' : ''}`}
          onClick={toggleFavourite}
          aria-label={favourited ? 'Remove from favourites' : 'Add to favourites'}
        >
          {favourited ? '★' : '☆'}
        </button>
      </div>

      <div className="job-detail-meta">
        <img src={job.company_logo} alt={job.company_name} className="company-logo" />
        <div>
          <p className="company-name">{job.company_name}</p>
          <p className="job-location">{job.candidate_required_location}</p>
        </div>
      </div>

      <div className="job-detail-info">
        <p><strong>Category:</strong> {job.category}</p>
        <p><strong>Type:</strong> {job.job_type}</p>
        <p><strong>Posted:</strong> {new Date(job.publication_date).toLocaleDateString()}</p>
        {job.salary && <p><strong>Salary:</strong> {job.salary}</p>}
      </div>

      {job.tags && job.tags.length > 0 && (
        <div className="job-detail-tags">
          {job.tags.map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
        </div>
      )}

      <div className="job-detail-description">
        <h2>Description</h2>
        <div dangerouslySetInnerHTML={{ __html: job.description }} />
      </div>

      <a href={job.url} target="_blank" rel="noopener noreferrer" className="apply-button">
        Apply on Remotive
      </a>
    </div>
  );
};

export default JobDetail;