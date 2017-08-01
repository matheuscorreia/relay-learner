import React from 'react'
import {
  createFragmentContainer,
  graphql,
} from 'react-relay'

import Phrase from './Phrase'

class AllPhrases extends React.Component {

  render() {
    return (
      <ul>
        {this.props.viewer.allPhrases.edges.map(({ node }, i) => (
          <Phrase
            phrase={node}
            key={i}
          />
        ))}
      </ul>

    )
  }

}

export default createFragmentContainer(AllPhrases, graphql`
  fragment AllPhrases_viewer on Viewer {
    allPhrases(first:500) @connection(key: "Phrases_allPhrases", filters:["first"]){
      edges{
        node{
          ...Phrase_phrase
        }
      }
    }
  }
`)
