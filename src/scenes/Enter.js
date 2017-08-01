import React from 'react'
import {
  QueryRenderer,
  graphql,
} from 'react-relay'
import environment from '../config/relay.enviroment'

import SignupLogin from '../components/SignupLogin'
import Loading from '../components/Loading'

const EnterUsersQuery = graphql`
  query EnterQuery{
    viewer {
      allUsers @connection(key:"Enter_allUsers") {
        edges {
          node {
            id
            nickname
          }
        }
      }
    }
  }
`

const Enter = (props) => {
  return (
    <QueryRenderer
      environment={environment}
      query={EnterUsersQuery}
      render={({error, props}) => {
        if(error) return <div>{error.message}</div>
        else if(props){
          return <SignupLogin {...props.viewer.allUsers} />
        }
        return <Loading isActive={true} />
      }}
    />
  )
}

export default Enter
