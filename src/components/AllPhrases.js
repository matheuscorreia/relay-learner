import React from 'react'
import {
  createFragmentContainer,
  graphql,
} from 'react-relay'

import Phrase from './Phrase'
import { Card } from 'semantic-ui-react'

class AllPhrases extends React.Component {

  render() {
    return (
      <Card.Group itemsPerRow="1" style={{'padding': '0 15px'}}>
        {this.props.viewer.allPhrases.edges.map(({ node }, i) => (
          <Phrase
            phrase={node}
            key={i}
          />
        ))}
      </Card.Group>

    )
  }

}

export default createFragmentContainer(AllPhrases, graphql`
  fragment AllPhrases_viewer on Viewer {
    allPhrases(first:500){
      edges{
        node{
          ...Phrase_phrase
        }
      }
    }
  }
`)
