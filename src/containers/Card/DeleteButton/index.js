// == Imports

import { connect } from 'react-redux';

import DeleteButton from '../../../components/Card/DeleteButton';

import { deleteMovie, filterByCategory } from '../../../actions/movies';

const mapStateToProps = (state, ownProps) => ({
  movies: state.movies,
  movieId: ownProps.movieId,
});

const mapDispatchToProps = (dispatch) => ({
  deleteMovie: (movieId) => {
    dispatch(deleteMovie(movieId));
  },
  filterByCategory: (category) => {
    dispatch(filterByCategory(category));
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeleteButton);
