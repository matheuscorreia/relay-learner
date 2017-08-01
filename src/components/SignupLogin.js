import React from 'react'
import CreateUserMutation from '../mutations/CreateUserMutation'
import { withRouter } from 'react-router-dom'

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
      <div>
        <p>Type your nickname:</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="nickname"/>
          <button type="submit" disabled={this.state.isSending}>Enviar</button>
        </form>
      </div>
    )
  }
}

export default withRouter(SignupLogin)
