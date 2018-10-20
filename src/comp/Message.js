import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions/index';

export class Message extends Component {
  render() {
    return <h3>Message {this.props.match.params.id}</h3>
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
)(Message);
