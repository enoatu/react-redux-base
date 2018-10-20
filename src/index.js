import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'
import { Link } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

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

export class About extends Component {
  render() {
    return <h3>About</h3>
  }
}

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

export class Message extends Component {
  render() {
    return <h3>Message {this.props.match.params.id}</h3>
  }
}

ReactDOM.render(
  <Router history={history}>
    <div>
      <Route exact path="/" component={ App }/>
      <Route path="/about" component={About} />
      <Route path="/inbox" component={Inbox} />
      <Route path="/messages/:id" component={Message} />
    </div>
  </Router>,
  document.getElementById('container')
)
