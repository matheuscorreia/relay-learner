import React, { Component } from 'react'

import Nav from '../components/Nav'

import CreatePhraseMutation from '../mutations/CreatePhraseMutation'

class SaySomething extends Component {

  state = {
    isSending: false,
  }

  handleSubmit = (e) => {
    this.setState({isSending: true})
    e.preventDefault()
    CreatePhraseMutation(this.props.match.params.id, e.target[0].value, (res) => this.setState({isSending: false}))
    e.target.reset()
  }

  render () {
    return (
      <div>
        <Nav />
        <form onSubmit={this.handleSubmit}>
          <textarea type="text" name="phrase"/>
          <button type="submit" disabled={this.state.isSending}>Enviar</button>
        </form>
      </div>
    )
  }
}

export default SaySomething
