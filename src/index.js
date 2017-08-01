import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router, Route, } from 'react-router-dom'

// scenes
import PeopleSaid from './scenes/PeopleSaid'
import YouSaid from './scenes/YouSaid'
import Enter from './scenes/Enter'
import SaySomething from './scenes/SaySomething'

ReactDOM.render(
  <Router>
    <div className="container-fluid cyan lighten-2">
      <Route exact path='/' component={Enter} />
      <Route path='/:id/all' component={PeopleSaid} />
      <Route path='/:id/you' component={YouSaid} />
      <Route path='/:id/say' component={SaySomething} />
    </div>
  </Router>
  , document.getElementById('root')
)

registerServiceWorker()
