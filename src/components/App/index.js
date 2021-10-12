// == Imports

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './app.scss';

import Card from '../../containers/Card';
import CategoryFilter from '../../containers/CategoryFilter';

// == Component

const App = ({ movies, loadMovies, chosenCategory }) => {
  useEffect(() => {
    loadMovies();
  }, [loadMovies]);
  return (
    <div className="app">
      <CategoryFilter />
      {chosenCategory === '0' && 
        <div className="cards">
          {movies.map((movie) => (
            <Card key={movie.id} {...movie} />
          ))}
        </div>
      }
      {chosenCategory !== '0' && (
        <div className="cards">
          {movies.filter((movie) => movie.category === chosenCategory)
          .map((movie) => (
            <Card key={movie.id} {...movie} />
          ))}
        </div>
      )}
    </div>
  );
} 

// == PropTypes

App.propTypes = {
  movies: PropTypes.array.isRequired,
  loadMovies: PropTypes.func.isRequired,
};

// == Export

export default App;
