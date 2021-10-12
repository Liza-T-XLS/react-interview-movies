// == Imports

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './app.scss';

import Card from '../../containers/Card';

// == Component

const App = ({movies, loadMovies}) => {
  useEffect(() => {
    loadMovies();
  }, [loadMovies]);
  return (
    <div className="App">
      {movies.map((movie) => (
        <Card key={movie.id} {...movie} />
      ))}
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
