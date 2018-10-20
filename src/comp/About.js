import React, { Component } from 'react'
import { connect } from 'react-redux';
import actions from '../store/actions/index';

export class About extends Component {
  render() {
    return <h3>About</h3>
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch) => {
    return {
        actions: actions(dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(About);
