import React, { Component } from 'react';
import actions from '../store/actions/index';
import { Link } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <div>
        <h1>TODO</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
          <li><Link to="/messages/10">Message</Link></li>
        </ul>
      </div>
    )
  }
}

export default App
