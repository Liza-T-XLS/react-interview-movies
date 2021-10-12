// == Imports

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './categoryFilter.scss';

// == Component

const CategoryFilter = ({ movies }) => {
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

  return (
    <div className="categoryFilter">
      <select>
        <option defaultValue="0">Filter by category</option>
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
};

// == Export

export default CategoryFilter;
