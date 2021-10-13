// == Imports

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './app.scss';

import CategoryFilter from '../../containers/CategoryFilter';
import Card from '../../containers/Card';
import Pagination from '../../containers/Pagination';

// == Component

const App = ({ movies, loadMovies, chosenCategory, currentPage, numberPerPage }) => {
  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  const moviesToDisplay = chosenCategory === '0' ? movies : movies.filter((movie) => movie.category === chosenCategory);
  const pageQuantity = Math.ceil(moviesToDisplay.length / numberPerPage);
  const startIndex = numberPerPage * currentPage - numberPerPage;
  const endIndex = moviesToDisplay.length < numberPerPage ? moviesToDisplay.length : startIndex + numberPerPage;
  const moviesToDisplayOnThisPage = moviesToDisplay.slice(startIndex, endIndex);
  return (
    <div className="app">
      <CategoryFilter />
      <div className="cards">
          {moviesToDisplayOnThisPage.map((movie) => (
            <Card key={movie.id} {...movie} pageQuantity={pageQuantity} />
          ))}
      </div>
      {moviesToDisplay.length === 0 && (
        <div className="message">
          Well, it seems that we have hit the end of the road...
        </div>
      )}
      {moviesToDisplay.length !== 0 && (
        <Pagination pageQuantity={pageQuantity} />
      )}
    </div>
  );
} 

// == PropTypes

App.propTypes = {
  movies: PropTypes.array.isRequired,
  loadMovies: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  numberPerPage: PropTypes.number.isRequired,
};

// == Export

export default App;
