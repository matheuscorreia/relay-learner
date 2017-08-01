import React from 'react'

import { Loader } from 'semantic-ui-react'

const Loading = props => (
  <Loader active={props.isActive} />
)

export default Loading
