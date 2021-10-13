// == Imports

import { connect } from 'react-redux';

import CategoryFilter from '../../components/CategoryFilter';

import { filterByCategory, setCurrentPage } from '../../actions/movies';

// == Map

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const mapDispatchToProps = (dispatch) => ({
  filterByCategory: (category) => {
    dispatch(filterByCategory(category));
  },
  setCurrentPage: (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryFilter);
