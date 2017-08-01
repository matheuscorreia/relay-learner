import React, { Component } from 'react'
import {
  QueryRenderer,
  graphql,
} from 'react-relay'
import environment from '../config/relay.enviroment'

import Nav from '../components/Nav'
import AllPhrases from '../components/AllPhrases'

const PeopleSaidQuery = graphql`
  query PeopleSaidQuery{
    viewer {
     ...AllPhrases_viewer
    }
  }
`

class PeopleSaid extends Component {

  render () {
    return (
      <div>
        <Nav />
        <QueryRenderer
          environment={environment}
          query={PeopleSaidQuery}
          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>
            } else if (props) {
              return <AllPhrases viewer={props.viewer} />
            }
            return <div>Loading</div>
          }} />
      </div>

    )
  }
}

export default PeopleSaid
