import { useState, useMemo } from 'react';
import { useJobs } from '../context/JobsContext';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import JobList from '../components/JobList';

const Home = () => {
  const { jobs, loading, error } = useJobs();
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    job_type: '',
    location: ''
  });

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company_name.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = filters.category === '' || job.category === filters.category;
      const matchesJobType = filters.job_type === '' || job.job_type === filters.job_type;
      const matchesLocation = filters.location === '' || job.candidate_required_location === filters.location;

      return matchesSearch && matchesCategory && matchesJobType && matchesLocation;
    });
  }, [jobs, searchQuery, filters]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600">Loading jobs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-red-600 font-semibold">Error loading jobs</p>
          <p className="text-slate-600 mt-2">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Find Your <span className="text-violet-600">Remote</span> Job
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover opportunities to work from anywhere. Freedom starts here.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <div className="mt-6">
            <FilterBar filters={filters} setFilters={setFilters} />
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {filteredJobs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-slate-500">No jobs found matching your criteria.</p>
          </div>
        ) : (
          <>
            <p className="text-sm text-slate-600 mb-6 font-medium">
              {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} found
            </p>
            <JobList jobs={filteredJobs} />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;