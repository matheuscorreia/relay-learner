import React from 'react'
import {
  createFragmentContainer,
  graphql,
} from 'react-relay'

import { Card, Button } from 'semantic-ui-react'

import DeletePhraseMutation from '../mutations/DeletePhraseMutation'

const moment = require('moment')

class Phrase extends React.Component {

  state = {
    className: '',
  }
  changeClassName = (className = 'bounceOutRight animated') => {
    this.setState({className: className})
  }
  handleDelete = () => {
    this.changeClassName()
    setTimeout(() => {
      this.changeClassName('')
      DeletePhraseMutation(this.props.phrase.id, this.props.phrase.user.id)
    }, 500)
  }

  render() {
    const createdAt = moment(this.props.phrase.createdAt)
    return (
      <Card fluid raised className={this.state.className}>
        <Card.Content>
          <Card.Header style={{'wordWrap': 'break-word'}}>
            {this.props.phrase.text}
          </Card.Header>
          <Card.Meta>
            {createdAt.format('lll')}
          </Card.Meta>
          <Card.Description >
            {this.props.phrase.user.nickname}
          </Card.Description>
          {this.props.canDelete ? <Button secondary style={{'float':'right'}} type="button" onClick={this.handleDelete}>Delete</Button> : null}
        </Card.Content>
      </Card>
    )
  }

}

export default createFragmentContainer(Phrase, graphql`
  fragment Phrase_phrase on Phrase {
    createdAt
    id
    text
    user {
      id
      nickname
    }
  }
`)
