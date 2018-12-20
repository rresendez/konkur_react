import React from 'react'

import Personal from '../../components/PersonalItem'

class MockChange extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.state.name = 'empty'
    this.state.buffer = []
  }

  render () {
    return (
      <div>
        <Personal
        >
        </Personal>
      </div>
    )
  }
}

export default MockChange
