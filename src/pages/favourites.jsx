import { Link } from 'react-router-dom';
import { useFavourite } from '../hooks/useFavourite';
import JobList from '../components/JobList';

const Favourites = () => {
  const { favourite } = useFavourite();

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-slate-900 mb-2">Saved Jobs</h1>
          <p className="text-lg text-slate-600">
            {favourite.length} job{favourite.length !== 1 ? 's' : ''} saved for later
          </p>
        </div>

        {favourite && favourite.length > 0 ? (
          <JobList jobs={favourite} />
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
            <p className="text-lg text-slate-600 mb-6">No saved jobs yet.</p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 px-6 rounded-xl transition"
            >
              Explore Jobs →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourites;