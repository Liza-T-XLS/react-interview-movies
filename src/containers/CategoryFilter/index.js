// == Imports

import { connect } from 'react-redux';

import CategoryFilter from '../../components/CategoryFilter';

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const mapDispatchToProps = (dispatch) => ({

});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryFilter);
