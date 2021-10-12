// == Imports

import { connect } from 'react-redux';

import Gauge from '../../../components/Card/Gauge';

const mapStateToProps = (state, ownProps) => ({
  likes: ownProps.likes,
  dislikes: ownProps.dislikes,
});

const mapDispatchToProps = (dispatch) => ({

});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Gauge);
