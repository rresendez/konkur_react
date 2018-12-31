import React from 'react'

import ManagmentUI from '../../components/ManagmentUI'

class MockChange extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <ManagmentUI>
        </ManagmentUI>
      </div>
    )
  }
}

export default MockChange
