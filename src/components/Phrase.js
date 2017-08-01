import React from 'react'
import {
  createFragmentContainer,
  graphql,
} from 'react-relay'

import DeletePhraseMutation from '../mutations/DeletePhraseMutation'

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
      DeletePhraseMutation(this.props.phrase.id, this.props.phrase.user.id)
      this.changeClassName('')
    }, 500)
  }

  render() {
    return (
      <li className={this.state.className}>
        <h3>{this.props.phrase.text}</h3>
        <h2>{this.props.phrase.user.nickname}</h2>
        {this.props.canDelete ? <button type="button" onClick={this.handleDelete}>Deletar</button> : null}
      </li>
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
