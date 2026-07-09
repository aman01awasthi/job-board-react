import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-violet-600">
          RemoteHub
        </Link>
        <div className="flex gap-8">
          <Link 
            to="/" 
            className="text-slate-600 hover:text-violet-600 font-medium transition"
          >
            Explore
          </Link>
          <Link 
            to="/favourites" 
            className="text-slate-600 hover:text-violet-600 font-medium transition"
          >
            Saved
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;