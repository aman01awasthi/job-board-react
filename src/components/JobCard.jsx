import { Link } from 'react-router-dom';
import { useFavourite } from '../hooks/useFavourite';

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
    <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow hover:border-violet-200 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-violet-600 transition mb-1">
            {job.title}
          </h3>
          <p className="text-slate-600 font-medium">{job.company_name}</p>
        </div>
        <button
          className={`flex-shrink-0 text-2xl ml-3 transition transform hover:scale-110 ${
            favourited ? 'text-amber-400' : 'text-slate-300 hover:text-amber-400'
          }`}
          onClick={toggleFavourite}
          aria-label={favourited ? 'Remove from favourites' : 'Add to favourites'}
        >
          {favourited ? '★' : '☆'}
        </button>
      </div>

      <div className="flex items-center gap-4 mb-4 text-sm text-slate-600">
        <span className="inline-flex items-center gap-1">
          📍 {job.candidate_required_location}
        </span>
        <span className="inline-flex items-center gap-1">
          💼 {job.job_type.replace('_', ' ')}
        </span>
      </div>

      <Link 
        to={`/job-detail/${job.id}`} 
        className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:text-violet-700 group/link"
      >
        View Details
        <span className="group-hover/link:translate-x-1 transition">→</span>
      </Link>
    </div>
  );
};

export default JobCard;