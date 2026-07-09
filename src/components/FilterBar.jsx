const FilterBar = ({ filters, setFilters }) => {
  const handleCategoryChange = (e) => {
    setFilters({ ...filters, category: e.target.value });
  };

  const handleJobTypeChange = (e) => {
    setFilters({ ...filters, job_type: e.target.value });
  };

  const handleLocationChange = (e) => {
    setFilters({ ...filters, location: e.target.value });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <select 
        value={filters.category} 
        onChange={handleCategoryChange} 
        className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-slate-900 cursor-pointer"
      >
        <option value="">All Categories</option>
        <option value="Information Technology">Information Technology</option>
        <option value="Sales">Sales</option>
        <option value="Marketing">Marketing</option>
      </select>

      <select 
        value={filters.job_type} 
        onChange={handleJobTypeChange} 
        className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-slate-900 cursor-pointer"
      >
        <option value="">All Job Types</option>
        <option value="full_time">Full Time</option>
        <option value="part_time">Part Time</option>
        <option value="contract">Contract</option>
      </select>

      <select 
        value={filters.location} 
        onChange={handleLocationChange} 
        className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-slate-900 cursor-pointer"
      >
        <option value="">All Locations</option>
        <option value="USA">USA</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
      </select>
    </div>
  );
};

export default FilterBar;