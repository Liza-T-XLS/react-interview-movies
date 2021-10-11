// == Imports

import { connect } from 'react-redux';

import App from '../../components/App';

import { loadMovies } from '../../actions/movies';

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const mapDispatchToProps = (dispatch) => ({
  loadMovies: () => {
    dispatch(loadMovies());
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
