// == Imports

import { connect } from 'react-redux';

import DeleteButton from '../../../components/Card/DeleteButton';

import { deleteMovie, filterByCategory, setCurrentPage } from '../../../actions/movies';

const mapStateToProps = (state, ownProps) => ({
  movies: state.movies,
  movieId: ownProps.movieId,
  currentPage: state.currentPage,
  numberPerPage: state.numberPerPage,
});

const mapDispatchToProps = (dispatch) => ({
  deleteMovie: (movieId) => {
    dispatch(deleteMovie(movieId));
  },
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
)(DeleteButton);
