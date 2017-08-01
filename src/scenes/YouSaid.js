import React, { Component } from 'react'
import {
  QueryRenderer,
  graphql,
} from 'react-relay'
import environment from '../config/relay.enviroment'

import MyPhrases from '../components/MyPhrases'
import Nav from '../components/Nav'

const YouSaidQuery = graphql`
  query YouSaidQuery($userId: ID!){
    viewer {
      User(id: $userId){
        ...MyPhrases_user
      }
    }
  }
`

class YouSaid extends Component {
  render () {
    return (
      <div>
        <Nav />
        <QueryRenderer
          environment={environment}
          query={YouSaidQuery}
          variables={{userId: this.props.match.params.id,}}
          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>
            } else if (props) {
              return <MyPhrases user={props.viewer.User}/>
            }
            return <div>Loading</div>
          }} />
      </div>
    )
  }
}

export default YouSaid
