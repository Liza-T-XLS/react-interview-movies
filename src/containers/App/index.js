// == Imports

import { connect } from 'react-redux';

import App from '../../components/App';

import { loadMovies, setCurrentPage, resetToInitialState } from '../../actions/movies';

const mapStateToProps = (state) => ({
  movies: state.movies,
  chosenCategory: state.chosenCategory,
  currentPage: state.currentPage,
  numberPerPage: state.numberPerPage,
  pageQuantity: state.pageQuantity,
});

const mapDispatchToProps = (dispatch) => ({
  loadMovies: () => {
    dispatch(loadMovies());
  },
  setCurrentPage: (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  },
  resetToInitialState: () => {
    dispatch(resetToInitialState());
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
