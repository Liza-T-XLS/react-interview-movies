// == Imports

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './categoryFilter.scss';

// == Component

const CategoryFilter = ({ movies, filterByCategory, setCurrentPage }) => {
  useEffect(() => {
  }, [movies]);

  const categories = movies.map((movie) => (
    movie.category
  ));

  let options = [];

  categories.forEach((category) => {
    let isOption = options.find((option) => option === category);
    if (!isOption) {
        options.push(category);
    }
  });

  const categoryFilterSelectOnChangeHandler = (e) => {
    const category = e.target.value;
    filterByCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="categoryFilter">
      <label htmlFor="categoryFilterSelect">Filter by category</label>
      <select name="categoryFilterSelect" id="categoryFilterSelect" onChange={categoryFilterSelectOnChangeHandler}>
        <option defaultValue value="0">All</option>
        {options.map((option) => 
          <option key={option} value={option}>{option}</option>
        )}
      </select>
    </div>
  );
} 

// == PropTypes

CategoryFilter.propTypes = {
  movies: PropTypes.array.isRequired,
  filterByCategory: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

// == Export

export default CategoryFilter;
