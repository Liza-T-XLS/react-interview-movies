// == Imports

import { connect } from 'react-redux';

import Review from '../../../components/Card/Review';

import { updateLikes, updateDislikes } from '../../../actions/movies';

const mapStateToProps = (state, ownProps) => ({
  movieId: ownProps.movieId,
});

const mapDispatchToProps = (dispatch) => ({
  updateLikes: (movieId, number) => {
    dispatch(updateLikes(movieId, number));
  },
  updateDislikes: (movieId, number) => {
    dispatch(updateDislikes(movieId, number));
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Review);
