// == Imports

import { connect } from 'react-redux';

import Pagination from '../../components/Pagination';

import { setCurrentPage, setNumberPerPage } from '../../actions/movies';

// == Map

const mapStateToProps = (state, ownProps) => ({
  currentPage: state.currentPage,
  pageQuantity: ownProps.pageQuantity,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentPage: (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  },
  setNumberPerPage: (quantity) => {
    dispatch(setNumberPerPage(quantity));
  }
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pagination);
