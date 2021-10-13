// == Imports

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './pagination.scss';

// == Component

const Pagination = ({ currentPage, setCurrentPage, pageQuantity, setNumberPerPage }) => {
  const array = [];
  for (let quantity = 1; quantity <= pageQuantity; quantity++) {
    array.push(quantity);
  };

  const pageNumberOnClickHandler = (e) => {
    setCurrentPage(parseInt(e.target.value));
  };

  const displayOptionsOnChangeHandler = (e) => {
    setNumberPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const previousButtonOnClickHandler = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    };
  };

  const nextButtonOnClickHandler = () => {
    if (currentPage !== pageQuantity) {
      setCurrentPage(currentPage + 1);
    };
  };

  return (
    <div className="pagination">
      <div className="nav">
        <button className="previousButton" onClick={previousButtonOnClickHandler}>Previous</button>
        {array.map((element) => (
          <button key={element} value={element} className={classNames('pageNumber', { active: currentPage === element })} onClick={pageNumberOnClickHandler}>{element}</button>
        ))
        }
        <button className="nextButton" onClick={nextButtonOnClickHandler}>Next</button>
      </div>
      <div className="displayOptions">
        <label htmlFor="displayOptions">Cards per page</label>
        <select name="displayOptions" id="displayOptions" onChange={displayOptionsOnChangeHandler}>
          <option defaultValue value="4">4</option>
          <option value="8">8</option>
          <option value="12">12</option>
        </select>
      </div>
    </div>
  );
} 

// == PropTypes

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  pageQuantity: PropTypes.number.isRequired,
  setNumberPerPage: PropTypes.func.isRequired,
};

// == Export

export default Pagination;
