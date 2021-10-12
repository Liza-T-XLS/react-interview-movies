// == Imports

import { connect } from 'react-redux';

import DeleteButton from '../../../components/Card/DeleteButton';

import { deleteMovie } from '../../../actions/movies';

const mapStateToProps = (state, ownProps) => ({
  movieId: ownProps.movieId,
});

const mapDispatchToProps = (dispatch) => ({
  deleteMovie: (movieId) => {
    dispatch(deleteMovie(movieId));
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeleteButton);
