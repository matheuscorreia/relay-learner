import React from 'react'
import {
  createFragmentContainer,
  graphql,
} from 'react-relay'

import Phrase from './Phrase'

class MyPhrases extends React.Component {

  render() {
    return (
      <ul>
        {this.props.user.phrases.edges.map(({ node }, i) => (
          <Phrase
          canDelete
          phrase={node}
          key={i}/>
        ))}
      </ul>

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
