import {
  commitMutation,
  graphql,
} from 'react-relay'
// import {ConnectionHandler} from 'relay-runtime'
import environment from '../config/relay.enviroment'

const mutation = graphql`
  mutation CreatePhraseMutation($input: CreatePhraseInput!) {
    createPhrase(input: $input) {
      phrase {
        text
      }
      user {
        id
        nickname
      }
    }
  }
`
export default (userId, text, callback) => {
  const variables = {
    input: {
      text,
      userId,
      clientMutationId: "",
    },
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      optimisticUpdater: (proxyStore) => {
        console.log("I think this is gonna happen", proxyStore)
      },
      updater: (proxyStore) => {
        console.log("this happened")
      },
      onCompleted: (response) => {
        callback(response)
      },
      onError: err => console.error(err),
    },
  )
}
