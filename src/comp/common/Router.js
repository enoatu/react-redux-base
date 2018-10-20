import React, { Component } from 'react'
import { Router, Route } from 'react-router'
import { Link } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import App from '../App'
import About from '../About'
import Inbox from '../Inbox'
import Message from '../Message'

const history = createHistory()
export default class AppRouter extends Component {
    render(){
        return(
            <Router history={history}>
              <div>
                <Route exact path="/" component={ App }/>
                <Route path="/about" component={About} />
                <Route path="/inbox" component={Inbox} />
                <Route path="/messages/:id" component={Message} />
              </div>
            </Router>
        )
    }
}
