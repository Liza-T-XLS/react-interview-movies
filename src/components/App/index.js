// == Imports

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './app.scss';
import restoreIcon from '../../images/restore.svg';

import Header from '../Header';
import CategoryFilter from '../../containers/CategoryFilter';
import Card from '../../containers/Card';
import Pagination from '../../containers/Pagination';
import Footer from '../Footer';

// == Component

const App = ({ movies, loadMovies, chosenCategory, currentPage, numberPerPage, resetToInitialState }) => {
  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  const moviesToDisplay = chosenCategory === '0' ? movies : movies.filter((movie) => movie.category === chosenCategory);
  const pageQuantity = Math.ceil(moviesToDisplay.length / numberPerPage);
  const startIndex = numberPerPage * currentPage - numberPerPage;
  const endIndex = moviesToDisplay.length < numberPerPage ? moviesToDisplay.length : startIndex + numberPerPage;
  const moviesToDisplayOnThisPage = moviesToDisplay.slice(startIndex, endIndex);

  const resetOnClickHandler = () => {
    resetToInitialState();
    loadMovies();
  };

  return (
    <div className="app">
      <Header />
      <CategoryFilter />
      <div className="cards">
          {moviesToDisplayOnThisPage.map((movie) => (
            <Card key={movie.id} {...movie} pageQuantity={pageQuantity} />
          ))}
      </div>
      {moviesToDisplay.length === 0 && (
        <>
        <div className="message">
          Well, it seems that we have hit the end of the road!
          <br />
          <br />
          If you want to go back in time, hit the button below...
        </div>
        <div className="reset">
          <img src={restoreIcon} className="resetIcon" alt="reset icon" title="reset" onClick={resetOnClickHandler}/>
        </div>
        </>
      )}
      {moviesToDisplay.length !== 0 && (
        <Pagination pageQuantity={pageQuantity} />
      )}
      <Footer />
    </div>
  );
} 

// == PropTypes

App.propTypes = {
  movies: PropTypes.array.isRequired,
  loadMovies: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  numberPerPage: PropTypes.number.isRequired,
  resetToInitialState: PropTypes.func.isRequired,
};

// == Export

export default App;
