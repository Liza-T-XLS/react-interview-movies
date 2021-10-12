// == Imports

import { connect } from 'react-redux';

import Card from '../../components/Card';

const mapStateToProps = (state, ownProps) => ({
  movie: ownProps,
});

const mapDispatchToProps = (dispatch) => ({

});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Card);
