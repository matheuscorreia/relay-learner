import {
  commitMutation,
  graphql,
} from 'react-relay'
import {ConnectionHandler} from 'relay-runtime'
import environment from '../config/relay.enviroment'

const mutation = graphql`
  mutation DeletePhraseMutation($input: DeletePhraseInput!) {
    deletePhrase(input: $input) {
      deletedId
      phrase{
        id
        text
      }
    }
  }
`

export default (phraseId, viewerId,callback) => {
  const variables = {
    input: {
      id: phraseId,
      clientMutationId: "",
    },
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      optimisticUpdater: (proxyStore) => {
        const viewerProxy = proxyStore.get(viewerId)
        const connection = ConnectionHandler.getConnection(viewerProxy, "MyPhrases_phrases", {first: 500})
        if(connection){
          ConnectionHandler.deleteNode(connection, phraseId)
        }
      },
      updater: (proxyStore) => {
        const deletePhraseField = proxyStore.getRootField('deletePhrase')
        const deletedId = deletePhraseField.getValue('deletedId')
        const viewerProxy = proxyStore.get(viewerId)
        const connection = ConnectionHandler.getConnection(viewerProxy, "MyPhrases_phrases", {first: 500})
        if(connection){
          ConnectionHandler.deleteNode(connection, deletedId)
        }
      }
    },
  )
}
