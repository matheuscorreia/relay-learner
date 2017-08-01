import React from 'react'
import {
  createFragmentContainer,
  graphql,
} from 'react-relay'

import Phrase from './Phrase'
import { Card } from 'semantic-ui-react'

class MyPhrases extends React.Component {

  render() {
    return (
      <Card.Group style={{'padding': '0 15px'}}>
        {this.props.user.phrases.edges.map(({ node }, i) => (
          <Phrase
          canDelete
          phrase={node}
          key={i}/>
        ))}
      </Card.Group>

    )
  }

}

export default createFragmentContainer(MyPhrases, graphql`
  fragment MyPhrases_user on User {
    phrases(first:500) @connection(key: "MyPhrases_phrases", filters: ["first"]){
      edges{
        node{
          ...Phrase_phrase
        }
      }
    }
  }
`)
