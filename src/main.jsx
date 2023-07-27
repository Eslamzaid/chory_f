import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute } from 'react-router-dom'

import LoginA from "./components/notLoged/LoginA.jsx";
import Signup from "./components/notLoged/Signup.jsx";
import Chatting from "./components/loged/Chatting.jsx";

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='login' component={LoginA} />
      <Route path='signup' component={Signup} />
      <Route path="/home" component={Chatting}/>
    </Route>
  </Router>,
  document.getElementById('app')
)
