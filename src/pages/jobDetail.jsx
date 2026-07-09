import { useParams, Link } from 'react-router-dom';
import { useJobs } from '../hooks/useJobs';
import { useFavourite } from '../hooks/useFavourite';

const JobDetail = () => {
  const { id } = useParams();
  const { jobs } = useJobs();
  const { isFavourite, handleAddFavourite, handleRemoveFavourite } = useFavourite();

  const job = jobs.find(j => j.id === parseInt(id));

  if (!job) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <p className="text-lg text-slate-600">Job not found.</p>
        <Link to="/" className="text-violet-600 hover:text-violet-700 font-semibold mt-4 inline-block">
          ← Back to jobs
        </Link>
      </div>
    );
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
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="text-violet-600 hover:text-violet-700 font-semibold inline-flex items-center gap-2 mb-8">
          ← Back to jobs
        </Link>

        {/* Header */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">{job.title}</h1>
              <p className="text-xl text-slate-600">{job.company_name}</p>
            </div>
            <button
              className={`flex-shrink-0 text-4xl transition transform hover:scale-110 ${
                favourited ? 'text-amber-400' : 'text-slate-300 hover:text-amber-400'
              }`}
              onClick={toggleFavourite}
            >
              {favourited ? '★' : '☆'}
            </button>
          </div>

          {/* Meta */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
            <div>
              <p className="text-sm text-slate-500 font-medium">Location</p>
              <p className="text-lg text-slate-900 font-semibold">{job.candidate_required_location}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Type</p>
              <p className="text-lg text-slate-900 font-semibold">{job.job_type.replace('_', ' ')}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Category</p>
              <p className="text-lg text-slate-900 font-semibold">{job.category}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Posted</p>
              <p className="text-lg text-slate-900 font-semibold">
                {new Date(job.publication_date).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Tags */}
        {job.tags && job.tags.length > 0 && (
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-slate-600 mb-3 uppercase tracking-wide">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="inline-flex items-center px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Job Description</h2>
          <div 
            className="prose prose-sm max-w-none text-slate-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: job.description }} 
          />
        </div>

        {/* CTA */}
        <div className="flex gap-4">
          <a 
            href={job.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 px-6 rounded-xl transition text-center text-lg"
          >
            Apply Now on Remotive →
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;