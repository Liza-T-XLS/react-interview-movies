// == Imports

import { connect } from 'react-redux';

import CategoryFilter from '../../components/CategoryFilter';

import { filterByCategory } from '../../actions/movies';

// == Map

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const mapDispatchToProps = (dispatch) => ({
  filterByCategory: (category) => {
    dispatch(filterByCategory(category));
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryFilter);
