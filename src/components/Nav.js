import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import { Menu, Segment } from 'semantic-ui-react'

const Nav = (props) => (
  <Segment inverted style={{'borderRadius': 0}}>
    <Menu inverted secondary>
      <Menu.Item name='all'>
        <NavLink to={`/${props.match.params.id}/all`} exact activeClassName="active item" >People Said</NavLink>
      </Menu.Item>
      <Menu.Item name='all'>
        <NavLink to={`/${props.match.params.id}/you`} exact activeClassName="active item" >You Said</NavLink>
      </Menu.Item>
      <Menu.Item name='all'>
        <NavLink to={`/${props.match.params.id}/say`} exact activeClassName="active item" >Say it!</NavLink>
      </Menu.Item>
    </Menu>
  </Segment>

)

export default withRouter(Nav)
