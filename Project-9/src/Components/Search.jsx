import React from 'react';
import { useDispatch } from 'react-redux';


const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search notes..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
