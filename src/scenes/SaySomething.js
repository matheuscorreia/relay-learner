import React, { Component } from 'react'

import Nav from '../components/Nav'
import { Grid, Form } from 'semantic-ui-react'

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
        <Grid centered >
          <Grid.Column mobile='12' largeScreen='6'>
            <Form loading={this.state.isSending} onSubmit={this.handleSubmit}>
              <Form.TextArea />
              <Form.Button fluid type="submit">
                Send
              </Form.Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default SaySomething
