import React from 'react'
import CreateUserMutation from '../mutations/CreateUserMutation'
import { withRouter } from 'react-router-dom'

import { Form, Grid } from 'semantic-ui-react'

class SignupLogin extends React.Component {

  state = {
    isSending: false,
  }

  /* Itera sob o array de usuarios passado
  /* e compara com o nickname digitado
  /* se estiver correto:
  /* pega o id desse usuário
  /* senão:
  /* cria outro usuário com o nick novo */
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({isSending: true})
    const nickname = e.target[0].value

    const userIndex = this.props.edges.findIndex(({node}) => {
      return node.nickname === nickname;
    })

    if(userIndex > -1){
      const userId = this.props.edges[userIndex].node.id;
      this.props.history.push(`${userId}/say`)
    }else{
      CreateUserMutation(nickname, (res) => {
        const userId = res.createUser.user.id
        this.setState({isSending: false})
        this.props.history.push(`${userId}/say`)
      })
    }
  }

  render(){
    return (
      <div style={styles.middleOfPage}>
        <Grid centered style={styles.grid}>
          <Grid.Column mobile='12' largeScreen='6'>
            <Form loading={this.state.isSending} onSubmit={this.handleSubmit} >
              <Form.Input label="Nickname" type="text" name="nickname"/>
              <Form.Button basic compact fluid type="submit">
                <i className="material-icons">arrow_forward</i>
              </Form.Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const styles = {
  'middleOfPage': {
    'position': 'absolute',
    'width': '100%',
    'height': '100%',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
  },
  'grid': {
    'width': '100%',
  }
}

export default withRouter(SignupLogin)
