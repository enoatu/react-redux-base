import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions/index';

export class Inbox extends Component {
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
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
)(Inbox);
