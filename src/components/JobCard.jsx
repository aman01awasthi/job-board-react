import { Link } from 'react-router-dom';
import { useFavourite } from '../context/FavouritesContext';

const JobCard = ({ job }) => {
  const { isFavourite, handleAddFavourite, handleRemoveFavourite } = useFavourite();
  const favourited = isFavourite(job.id);

  const toggleFavourite = () => {
    if (favourited) {
      handleRemoveFavourite(job);
    } else {
      handleAddFavourite(job);
    }
  };

  return (
    <div className="job-card">
      <div className="job-card-header">
        <h3>{job.title}</h3>
        <button
          className={`favourite-btn ${favourited ? 'active' : ''}`}
          onClick={toggleFavourite}
          aria-label={favourited ? 'Remove from favourites' : 'Add to favourites'}
        >
          {favourited ? '★' : '☆'}
        </button>
      </div>
      <p className="job-company">{job.company}</p>
      <p className="job-location">{job.location}</p>
      <Link to={`/jobs/${job.id}`} className="job-details-link">
        View Details
      </Link>
    </div>
  );
};

export default JobCard;