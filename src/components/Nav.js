import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const Nav = (props) => (

  <nav>
    <ul>
      <li>
        <NavLink to={`/${props.match.params.id}/all`} exact activeClassName="" >People Said</NavLink>
      </li>
      <li>
        <NavLink to={`/${props.match.params.id}/you`} exact activeClassName="" >You Said</NavLink>
      </li>
      <li >
        <NavLink to={`/${props.match.params.id}/say`} exact activeClassName="" >Say it!</NavLink>
      </li>
    </ul>
  </nav>

)

export default withRouter(Nav)
