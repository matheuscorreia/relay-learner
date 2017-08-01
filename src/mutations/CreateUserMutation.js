import {
  commitMutation,
  graphql,
} from 'react-relay'
// import {ConnectionHandler} from 'relay-runtime'
import environment from '../config/relay.enviroment'

const mutation = graphql`
  mutation CreateUserMutation($input: SignupUserInput!) {
    createUser(input: $input) {
      user {
        id
        nickname
      }
    }
  }
`
export default (nickname, callback) => {
  const variables = {
    input: {
      nickname,
      clientMutationId: "",
    },
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response) => {
        callback(response)
      },
    },
  )
}
